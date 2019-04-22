package database.dao;

import java.util.List;

import database.bean.DataMstBean;

public interface DataMstDao {
    public List<DataMstBean> select(String report_id, String branch, int year, String report_period);
}
