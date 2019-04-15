<%@ page language="java" contentType="text/html; charset=UTF8"
    pageEncoding="UTF8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF8">
<link rel="stylesheet" href="../styles/kendo.common.min.css" />
<link rel="stylesheet" href="../styles/kendo.default.min.css" />
<link rel="stylesheet" href="../styles/kendo.default.mobile.min.css" />

<script src="../js/jquery.min.js"></script>
<script src="../js/jszip.min.js"></script>
<script src="../js/kendo.all.min.js"></script>
<script src="js/grid2.js"></script>

<title>Insert title here</title>
</head>
<body>

<div id="grid"></div>
<div id="grid1"></div>
<div id="grid2"></div>

<script>
var ReportServletURL = "${pageContext.request.contextPath}/ReportServlet";
</script>

</body>
</html>