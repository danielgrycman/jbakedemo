	<!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <span class="navbar-brand" href="<#if (content.rootpath)??>${content.rootpath}<#else></#if>" valign="middle"><img src="<#if (content.rootpath)??>${content.rootpath}<#else></#if>images/bilsteingroup_logo.png" width="200px" height="10px"></span>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="<#if (content.rootpath)??>${content.rootpath}<#else></#if>index.html"><span class="fa fa-home fa-2x"></span> Home</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
