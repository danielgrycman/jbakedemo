<#include "header.ftl">

	<#include "menu.ftl">

	<div class="col-md-8">
	<div class="page-header">
			<h1><#escape x as x?xml>${content.title}</#escape></h1>
			
		</div>
	



	<p>${content.body}</p>

	<hr />
	</div>
	<div class="col-md-4">
		
	</div>

<#include "footer.ftl">
