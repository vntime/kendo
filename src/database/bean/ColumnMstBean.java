package database.bean;

public class ColumnMstBean {

    private int id;
    private String report_id;
    private int column_id;
    private String title;
    private String description;
    private int parent_column_id;
    private int order_by;
    private String field;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getParent_column_id() {
        return parent_column_id;
    }

    public void setParent_column_id(int parent_column_id) {
        this.parent_column_id = parent_column_id;
    }

    public int getOrder_by() {
        return order_by;
    }

    public void setOrder_by(int order_by) {
        this.order_by = order_by;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

}
