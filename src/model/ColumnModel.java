/**
 * 
 */
package model;

import java.util.List;

import model.bean.ColumnBean;

/**
 * @author admin
 *
 */
public interface ColumnModel {

    public List<ColumnBean> selectAll() throws Exception;

    public List<ColumnBean> selectByReportId(String reportId) throws Exception;
}
