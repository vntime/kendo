/**
 * 
 */
package model.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Component;

import database.bean.RowMstBean;
import database.dao.RowMstDao;
import model.RowModel;
import model.bean.RowResponseBean;
import utils.AppConfig;

/**
 * @author admin
 *
 */
@Component
public class RowModelImpl implements RowModel {

    @Override
    public List<RowResponseBean> selectAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<RowResponseBean> selectByReportId(String reportId) throws Exception {
        RowMstDao dao = (RowMstDao) AppConfig.getBean(RowMstDao.class);
        List<RowMstBean> rowMstBeans = dao.selectByReportId(reportId);

        List<RowResponseBean> rowResponseBeans = new ArrayList<>();

        if (rowMstBeans == null || rowMstBeans.isEmpty()) {
            return rowResponseBeans;
        }

        for (RowMstBean rowMstBean : rowMstBeans) {
            RowResponseBean bean = new RowResponseBean();
            BeanUtils.copyProperties(bean, rowMstBean);
            rowResponseBeans.add(bean);
        }

        return rowResponseBeans;
    }

}
