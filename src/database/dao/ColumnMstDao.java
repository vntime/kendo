package database.dao;

import java.util.List;

import database.bean.ColumnMstBean;

public interface ColumnMstDao {
    public List<ColumnMstBean> selectAll();

    public List<ColumnMstBean> selectByReportId(String reportId);
}
