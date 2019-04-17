/**
 * 
 */
package model;

import java.util.List;

import model.bean.RowResponseBean;

/**
 * @author admin
 *
 */
public interface RowModel {

    public List<RowResponseBean> selectAll() throws Exception;

    public List<RowResponseBean> selectByReportId(String reportId) throws Exception;
}
