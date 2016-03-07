		</div>
		<div id="push"></div>
    </div>

    <div class="footer navbar-fixed-bottom">
      <div class="container">
        <p class="muted credit">&copy; bilstein group 2016 | Mixed with <a href="http://getbootstrap.com/" target="_blank">Bootstrap v3.3.6</a> and <a href="http://fortawesome.github.io/Font-Awesome/" target="_blank">FontAwesome Version 4.5.0</a> | Baked with <a href="http://jbake.org" target="_blank">JBake ${version}</a></p>
      </div>
    </footer>

    <script src="<#if (content.rootpath)??>${content.rootpath}<#else></#if>js/jquery-1.11.1.min.js"></script>
    <script src="<#if (content.rootpath)??>${content.rootpath}<#else></#if>js/bootstrap.min.js"></script>
    <script src="<#if (content.rootpath)??>${content.rootpath}<#else></#if>js/prettify.js"></script>
    <script type="text/javascript">
       $('.navbar li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }

    });
    </script>
  </body>
</html>
