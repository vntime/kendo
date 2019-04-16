/**
 * 
 */
package model;

import java.util.List;

import model.bean.ColumnResponseBean;

/**
 * @author admin
 *
 */
public interface ColumnModel {

    public List<ColumnResponseBean> selectAll() throws Exception;

    public List<ColumnResponseBean> selectByReportId(String reportId) throws Exception;
}
