package model.bean;

import java.util.ArrayList;
import java.util.List;

public class ColumnResponseBean {
    private int id;
    private String report_id;
    private int column_id;
    private String title;
    private String field;
    private int parentColumnId;
    private List<ColumnResponseBean> columns = new ArrayList<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReport_id() {
        return report_id;
    }

    public void setReport_id(String report_id) {
        this.report_id = report_id;
    }

    public int getColumn_id() {
        return column_id;
    }

    public void setColumn_id(int column_id) {
        this.column_id = column_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public int getParentColumnId() {
        return parentColumnId;
    }

    public void setParentColumnId(int parentColumnId) {
        this.parentColumnId = parentColumnId;
    }

    public List<ColumnResponseBean> getColumns() {
        return columns;
    }

    public void setColumns(List<ColumnResponseBean> columns) {
        this.columns = columns;
    }

}
