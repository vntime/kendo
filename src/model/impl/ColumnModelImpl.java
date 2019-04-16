/**
 * 
 */
package model.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import database.bean.ColumnMstBean;
import database.dao.ColumnMstDao;
import model.ColumnModel;
import model.bean.ColumnResponseBean;
import utils.AppConfig;

/**
 * @author admin
 *
 */
@Component
public class ColumnModelImpl implements ColumnModel {

    @Override
    public List<ColumnResponseBean> selectAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<ColumnResponseBean> selectByReportId(String reportId) throws Exception {
        ColumnMstDao dao = (ColumnMstDao) AppConfig.getBean(ColumnMstDao.class);
        List<ColumnMstBean> columnMstBeans = dao.selectByReportId(reportId);
        List<ColumnResponseBean> columnResponseBeans = getColumnsHeader(columnMstBeans);
        return columnResponseBeans;
    }

    private List<ColumnResponseBean> getColumnsHeader(List<ColumnMstBean> columnMstBeans) {
        List<ColumnResponseBean> columnResponseBeans = new ArrayList<>();

        if (columnMstBeans == null || columnMstBeans.isEmpty()) {
            return columnResponseBeans;
        }

        for (ColumnMstBean columnMstBean : columnMstBeans) {
            ColumnResponseBean bean = new ColumnResponseBean();
            bean.setField(columnMstBean.getField());
            bean.setTitle(columnMstBean.getTitle());
            bean.setId(columnMstBean.getId());
            if (columnMstBean.getParent_column_id() != 0) {
                for (ColumnResponseBean columnResponseBean : columnResponseBeans) {
                    if (columnResponseBean.getId() == columnMstBean.getParent_column_id()) {
                        columnResponseBean.getColumns().add(bean);
                        break;
                    }
                }
            } else {
                columnResponseBeans.add(bean);
            }
        }

        return columnResponseBeans;
    }

}
