package model.bean;

import java.io.Serializable;

public class BaseBean implements Serializable {

    /**
     * 
     */
    private static final long serialVersionUID = -8253534544819173653L;

    private String status;
    private String description;
    private String data;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

}
