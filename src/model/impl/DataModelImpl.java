package model.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Component;

import database.bean.DataMstBean;
import database.dao.DataMstDao;
import model.DataModel;
import model.bean.DataResponseBean;
import utils.AppConfig;
import utils.Utils;

@Component
public class DataModelImpl implements DataModel {

    @Override
    public List<DataResponseBean> select(String report_id, String branch, int year, String report_period)
            throws Exception {
        if (Utils.isNull(report_id) || Utils.isNull(branch) || Utils.isNull(report_period)) {
            return null;
        }

        DataMstDao dao = (DataMstDao) AppConfig.getBean(DataMstDao.class);
        List<DataMstBean> dataMstBeans = dao.select(report_id, branch, year, report_period);
        List<DataResponseBean> responseBeans = new ArrayList<>();

        if (dataMstBeans == null || dataMstBeans.isEmpty()) {
            return responseBeans;
        }

        for (DataMstBean mstBean : dataMstBeans) {
            DataResponseBean responseBean = new DataResponseBean();
            BeanUtils.copyProperties(responseBean, mstBean);
            responseBeans.add(responseBean);
        }

        return responseBeans;
    }

}
