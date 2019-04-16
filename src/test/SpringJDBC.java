package test;

import java.util.List;

import database.bean.RowMstBean;
import database.dao.RowMstDao;
import model.ColumnModel;
import model.bean.ColumnResponseBean;
import model.bean.RowResponseBean;
import utils.AppConfig;

public class SpringJDBC {
    public static void main(String[] args) throws Exception {

        ColumnModel columnListMstDao = (ColumnModel) AppConfig.getBean(ColumnModel.class);
        List<ColumnResponseBean> res = columnListMstDao.selectByReportId("RP1");
        for (ColumnResponseBean columnListMstBean : res) {
            System.out.println(columnListMstBean.getTitle());
        }
        System.out.println("Success");
    }
}
