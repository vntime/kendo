package test;

import java.util.List;

import database.bean.RowMstBean;
import database.dao.RowMstDao;
import model.ColumnModel;
import model.bean.ColumnBean;
import model.bean.RowBean;
import utils.AppConfig;

public class SpringJDBC {
    public static void main(String[] args) throws Exception {

        ColumnModel columnListMstDao = (ColumnModel) AppConfig.getBean(ColumnModel.class);
        List<ColumnBean> res = columnListMstDao.selectByReportId("RP1");
        for (ColumnBean columnListMstBean : res) {
            System.out.println(columnListMstBean.getTitle());
        }
        System.out.println("Success");
    }
}
