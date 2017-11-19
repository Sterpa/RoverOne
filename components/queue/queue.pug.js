function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}function queueTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (JSON, data, lang, runColor, translation) {pug_html = pug_html + "\u003Cform class=\"queue__form\"\u003E\u003Cfieldset class=\"queue__fieldset\"\u003E\u003Clegend\u003E" + (pug_escape(null == (pug_interp = translation.queue_legend[lang]) ? "" : pug_interp)) + "\u003C\u002Flegend\u003E";
// iterate data.gui
;(function(){
  var $$obj = data.gui;
  if ('number' == typeof $$obj.length) {
      for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
        var val = $$obj[key];
pug_html = pug_html + "\u003Cdiv\u003E\u003Cp\u003E" + (pug_escape(null == (pug_interp = key) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Ctextarea" + (" class=\"queue__gui\""+" readonly=\"readonly\""+pug_attr("name", key, true, false)+pug_attr("placeholder", translation.queue_textarea_placeholder[lang], true, false)) + "\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(data.gui[key])) ? "" : pug_interp)) + "\u003C\u002Ftextarea\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;
      var val = $$obj[key];
pug_html = pug_html + "\u003Cdiv\u003E\u003Cp\u003E" + (pug_escape(null == (pug_interp = key) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Ctextarea" + (" class=\"queue__gui\""+" readonly=\"readonly\""+pug_attr("name", key, true, false)+pug_attr("placeholder", translation.queue_textarea_placeholder[lang], true, false)) + "\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(data.gui[key])) ? "" : pug_interp)) + "\u003C\u002Ftextarea\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cbr\u003E";
// iterate data.dev
;(function(){
  var $$obj = data.dev;
  if ('number' == typeof $$obj.length) {
      for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
        var val = $$obj[key];
pug_html = pug_html + "\u003Ctextarea" + (" class=\"queue__dev\""+" readonly=\"readonly\""+pug_attr("name", key, true, false)+pug_attr("placeholder", translation.queue_textarea_placeholder[lang], true, false)) + "\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(data.dev[key])) ? "" : pug_interp)) + "\u003C\u002Ftextarea\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;
      var val = $$obj[key];
pug_html = pug_html + "\u003Ctextarea" + (" class=\"queue__dev\""+" readonly=\"readonly\""+pug_attr("name", key, true, false)+pug_attr("placeholder", translation.queue_textarea_placeholder[lang], true, false)) + "\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(data.dev[key])) ? "" : pug_interp)) + "\u003C\u002Ftextarea\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cbr\u003E\u003Cbutton class=\"queue__button\" type=\"submit\"\u003E" + (pug_escape(null == (pug_interp = translation.queue_button_submit[lang]) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E\u003Cbutton" + (" class=\"queue__buttonStart\""+" type=\"button\" data-action=\"run\""+pug_attr("style", pug_style('color: ' + runColor), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = translation.queue_button_start[lang]) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E\u003C\u002Ffieldset\u003E\u003C\u002Fform\u003E";}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"lang" in locals_for_with?locals_for_with.lang:typeof lang!=="undefined"?lang:undefined,"runColor" in locals_for_with?locals_for_with.runColor:typeof runColor!=="undefined"?runColor:undefined,"translation" in locals_for_with?locals_for_with.translation:typeof translation!=="undefined"?translation:undefined));;return pug_html;}