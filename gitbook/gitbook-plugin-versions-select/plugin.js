require(["gitbook","jQuery"],function(o,i){var s,a=[],t={};function l(e){if(a=e||a,s=i(".versions-select select").val()||s,i(".versions-select").remove(),0!==a.length){var n=i("<li>",{class:"versions-select",html:"<div><select></select></div>"}),t=n.find("select");i.each(a,function(e,n){i("<option>",{selected:-1!==window.location.href.indexOf(n.value),value:n.value,text:n.text}).appendTo(t)}),t.change(function(){var e=i.grep(a,function(e){return e.value===t.val()})[0],n=window.location.href.replace(o.state.bookRoot,"");window.location.href=e.includeFilepath?e.value+n:e.value}),n.prependTo(".book-summary ul.summary")}}o.events.bind("start",function(e,n){(t=n.versions||{}).options&&l(t.options),t.gitbookConfigURL?function(e){i.getJSON(e,function(e){l(e.pluginsConfig.versions.options)})}(t.gitbookConfigURL):function(n){i.getJSON(o.state.bookRoot+"gitbook/api/versions/"+n,function(e){l(i.map(e,function(e){return{text:e.name,value:e.urls.website,selected:e.current,includeFilepath:!1!==t.includeFilepath&&"languages"!==n}}))})}(t.type||"branches")}),o.events.bind("page.change",function(){l()})});