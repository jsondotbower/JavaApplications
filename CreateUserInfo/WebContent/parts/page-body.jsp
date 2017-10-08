<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script type="text/javascript" src="js/validate.js"></script>
</head>
<body>
<form onsubmit="return validate();" name="form" >
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
			<td align="right">Date (YYYY/MM/DD): </td>
			<td><input type="text" name="date" id="date" /></td>
		</tr>
		<tr>
			<td></td>
			<td align="right"><input type="submit" value="Submit" /></td>
	</table>
   </form>
</body>
</html>