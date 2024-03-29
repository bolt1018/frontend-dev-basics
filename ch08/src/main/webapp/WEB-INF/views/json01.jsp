<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
</head>
<script type="text/javascript">
$(function(){
	$("button").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/json",
			async: true, //디폴트 true , false로 지정하면 동기로 동작
			type: 'get',
			dataType: 'json',
			success: function(response){
				console.log(response);
				var html = "";
				html += ("<h2>" + response.data.no + "</h2>");
				html += ("<h3>" + response.data.name + "</h3>");
				html += ("<h4>" + response.data.message + "</h4>");
				
				$("#data").append(html);
				//$("#data").html(html);
			}
				
		});
	});
});
</script>
<body>
	<h1>AJAX Test - JSON Format Data</h1>
	
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>