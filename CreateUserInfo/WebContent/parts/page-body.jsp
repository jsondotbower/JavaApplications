<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;">
		<script type="text/javascript" src="js/validate.js"></script>
	</head>
	<body>
		<form name="form" >
			<table>
				<tr>
					<td align="right">Name: </td>
					<td><input type="text" name="name" id="name" /></td>
				</tr>
				<tr>
					<td align="right">Email Address: </td>
					<td><input type="text" name="email" id="email" /></td>
				</tr>
				<tr>
					<td align="right">Phone Number: </td>
					<td><input type="text" name="phone" id="phone" /></td>
				</tr>
				<tr>
					<td align="right">Date (YYYY-MM-DD): </td>
					<td><input type="text" name="date" id="date" /></td>
				</tr>
				<tr>
					<td></td>
					<td align="right"><input type="button" value="Submit" onclick="validate();" /></td>
				</tr>
			</table>
	   </form>
	</body>
</html>