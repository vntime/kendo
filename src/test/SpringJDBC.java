package test;

import java.util.List;

import com.google.gson.Gson;

import model.ColumnModel;
import model.DataModel;
import model.bean.ColumnResponseBean;
import model.bean.DataResponseBean;
import utils.AppConfig;

public class SpringJDBC {
    public static void main(String[] args) throws Exception {

        Gson gson = new Gson();

//        ColumnModel columnListMstDao = (ColumnModel) AppConfig.getBean(ColumnModel.class);
//        List<ColumnResponseBean> res = columnListMstDao.selectByReportId("RP1");
//        for (ColumnResponseBean columnListMstBean : res) {
//            System.out.println(columnListMstBean.getTitle());
//        }
//        System.out.println("Success");

        DataModel dataModel = (DataModel) AppConfig.getBean(DataModel.class);
        List<DataResponseBean> dataResponseBeans = dataModel.select("rp1", "999", 2019, "T1");
        if (dataResponseBeans != null & !dataResponseBeans.isEmpty()) {
            System.out.println(gson.toJson(dataResponseBeans));
        } else {
            System.out.println("NULL");
        }
    }
}
