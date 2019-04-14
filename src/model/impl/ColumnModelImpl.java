/**
 * 
 */
package model.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Component;

import database.bean.ColumnMstBean;
import database.dao.ColumnMstDao;
import model.ColumnModel;
import model.bean.ColumnBean;
import utils.AppConfig;

/**
 * @author admin
 *
 */
@Component
public class ColumnModelImpl implements ColumnModel {

    @Override
    public List<ColumnBean> selectAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<ColumnBean> selectByReportId(String reportId) throws Exception {
        ColumnMstDao dao = (ColumnMstDao) AppConfig.getBean(ColumnMstDao.class);
        List<ColumnMstBean> columnMstBeans = dao.selectByReportId(reportId);
        List<ColumnBean> columnBeans = new ArrayList<>();

        for (ColumnMstBean columnMstBean : columnMstBeans) {
            ColumnBean columnBean = new ColumnBean();
            BeanUtils.copyProperties(columnBean, columnMstBean);
            columnBeans.add(columnBean);
        }

        return columnBeans;
    }

}
