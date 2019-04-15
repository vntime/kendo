/**
 * 
 */
package database.dao.impl;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Component;

import database.bean.RowMstBean;
import database.dao.RowMstDao;

/**
 * @author admin
 *
 */

@Component
public class RowMstDaoImpl extends BaseMstDaoImpl implements RowMstDao {

    public RowMstDaoImpl(DataSource dataSource) {
        super(dataSource);
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    @Override
    public List<RowMstBean> selectAll() {
        String sql = "SELECT * FROM ROW_MST";

        List<RowMstBean> rowMstBeans = getJdbcTemplate().query(sql, new BeanPropertyRowMapper(RowMstBean.class));

        return rowMstBeans;
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    @Override
    public List<RowMstBean> selectByReportId(String reportId) {
        String sql = "SELECT * FROM ROW_MST WHERE REPORT_ID = ?";

        List<RowMstBean> rowMstBeans = (List<RowMstBean>) getJdbcTemplate().query(sql, new String[] { reportId },
                new BeanPropertyRowMapper(RowMstBean.class));

        return rowMstBeans;
    }

}
