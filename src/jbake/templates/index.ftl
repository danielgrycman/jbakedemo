<#include "header.ftl">

	<#include "menu.ftl">
	
	<div class="col-md-8">
		<div class="page-header">
			<h1>Publisher developer documentation</h1>
		</div>
		<#list pages as page>
	  		<#if (page.status == "published" || page.status == "published-date")>
	  			<a href="${page.uri}"><h1><#escape x as x?xml>${page.title}</#escape></h1></a>
	  		</#if>
	  	</#list>
	
		<hr />
	</div>
	<div class="col-md-4">
	</div>

	<!--<p>Older posts are available in the <a href="/${config.archive_file}">archive</a>.</p>-->

<#include "footer.ftl">
