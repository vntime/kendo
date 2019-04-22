package model;

import java.util.List;

import model.bean.DataResponseBean;

public interface DataModel {
    public List<DataResponseBean> select(String report_id, String branch, int year, String report_period) throws Exception;
}
