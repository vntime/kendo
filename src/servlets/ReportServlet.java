package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import model.ColumnModel;
import model.RowModel;
import model.bean.ResponseBean;
import utils.AppConfig;

/**
 * Servlet implementation class ReportServlet
 */
@WebServlet("/ReportServlet")
public class ReportServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * Default constructor.
     */
    public ReportServlet() {
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ColumnModel columnModel = (ColumnModel) AppConfig.getBean(ColumnModel.class);
        RowModel rowModel = (RowModel) AppConfig.getBean(RowModel.class);
        ResponseBean bean = new ResponseBean();
        Gson gson = new Gson();
        String method = request.getParameter("method");

        try {
            if ("getHeaders".equals(method)) {
                bean.setData(columnModel.selectByReportId("RP1"));
                bean.setStatus("SUCCESS");
                bean.setDescription("SUCCESS");
            } else if ("getRows".equals(method)) {
                bean.setData(rowModel.selectByReportId("RP1"));
                bean.setStatus("SUCCESS");
                bean.setDescription("SUCCESS");
            }
        } catch (Exception e) {
            e.printStackTrace();
            bean.setStatus("FAIL");
            bean.setDescription("FAIL");
        }

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(gson.toJson(bean));
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

}
