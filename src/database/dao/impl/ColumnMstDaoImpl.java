/**
 * 
 */
package database.dao.impl;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Component;

import database.bean.ColumnMstBean;
import database.dao.ColumnMstDao;

/**
 * @author admin
 *
 */

@Component
public class ColumnMstDaoImpl extends BaseMstDaoImpl implements ColumnMstDao {

    public ColumnMstDaoImpl(DataSource dataSource) {
        super(dataSource);
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    @Override
    public List<ColumnMstBean> selectAll() {
        String sql = "SELECT * FROM COLUMN_MST";

        List<ColumnMstBean> columnMstBeans = getJdbcTemplate().query(sql,
                new BeanPropertyRowMapper(ColumnMstBean.class));

        return columnMstBeans;
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    @Override
    public List<ColumnMstBean> selectByReportId(String reportId) {
        String sql = "SELECT * FROM COLUMN_MST WHERE REPORT_ID = ?";

        List<ColumnMstBean> columnMstBeans = (List<ColumnMstBean>) getJdbcTemplate().query(sql,
                new String[] { reportId }, new BeanPropertyRowMapper(ColumnMstBean.class));

        return columnMstBeans;
    }

}
