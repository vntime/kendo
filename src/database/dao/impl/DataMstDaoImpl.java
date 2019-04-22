package database.dao.impl;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Component;

import database.bean.DataMstBean;
import database.dao.DataMstDao;

@Component
public class DataMstDaoImpl extends BaseMstDaoImpl implements DataMstDao {

    public DataMstDaoImpl(DataSource dataSource) {
        super(dataSource);
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    @Override
    public List<DataMstBean> select(String report_id, String branch, int year, String report_period) {

       
        String sql = "SELECT * FROM DATA_MST WHERE REPORT_ID = ? AND BRANCH = ? AND YEAR = ? AND REPORT_PERIOD = ?";

        List<DataMstBean> dataMstBeans = getJdbcTemplate().query(sql,
                new Object[] { report_id, branch, year, report_period }, new BeanPropertyRowMapper(DataMstBean.class));

        return dataMstBeans;
    }

}
