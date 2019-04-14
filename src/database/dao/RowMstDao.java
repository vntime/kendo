package database.dao;

import java.util.List;

import database.bean.RowMstBean;

public interface RowMstDao {
    public List<RowMstBean> selectAll();

    public List<RowMstBean> selectByReportId(String reportId);
}
