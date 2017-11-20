function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function formTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (dataLocal2, lang, translation) {pug_html = pug_html + "\u003Cform class=\"form__form\"\u003E\u003Cfieldset class=\"form__fieldset\"\u003E\u003Clegend\u003E" + (pug_escape(null == (pug_interp = translation.form_legend[lang]) ? "" : pug_interp)) + "\u003C\u002Flegend\u003E";
// iterate dataLocal2.gui
;(function(){
  var $$obj = dataLocal2.gui;
  if ('number' == typeof $$obj.length) {
      for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
        var val = $$obj[key];
pug_html = pug_html + "\u003Ctextarea class=\"form__gui-fieldname\" readonly=\"readonly\" disabled=\"disabled\" rows=\"1\"\u003E" + (pug_escape(null == (pug_interp = translation[`${key}_fieldname`][lang]) ? "" : pug_interp)) + "\u003C\u002Ftextarea\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;
      var val = $$obj[key];
pug_html = pug_html + "\u003Ctextarea class=\"form__gui-fieldname\" readonly=\"readonly\" disabled=\"disabled\" rows=\"1\"\u003E" + (pug_escape(null == (pug_interp = translation[`${key}_fieldname`][lang]) ? "" : pug_interp)) + "\u003C\u002Ftextarea\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cbr\u003E";
// iterate dataLocal2.gui
;(function(){
  var $$obj = dataLocal2.gui;
  if ('number' == typeof $$obj.length) {
      for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
        var val = $$obj[key];
pug_html = pug_html + "\u003Ctextarea" + (" class=\"form__gui\""+pug_attr("name", key, true, false)+pug_attr("placeholder", translation[`${key}_placeholder`][lang], true, false)) + "\u003E\u003C\u002Ftextarea\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;
      var val = $$obj[key];
pug_html = pug_html + "\u003Ctextarea" + (" class=\"form__gui\""+pug_attr("name", key, true, false)+pug_attr("placeholder", translation[`${key}_placeholder`][lang], true, false)) + "\u003E\u003C\u002Ftextarea\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cbr\u003E\u003Cbutton class=\"form__button\" type=\"submit\"\u003E" + (pug_escape(null == (pug_interp = translation.form_button_submit[lang]) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003Cspan\u003E&#160;\u003C\u002Fspan\u003E\u003C\u002Ffieldset\u003E\u003C\u002Fform\u003E";}.call(this,"dataLocal2" in locals_for_with?locals_for_with.dataLocal2:typeof dataLocal2!=="undefined"?dataLocal2:undefined,"lang" in locals_for_with?locals_for_with.lang:typeof lang!=="undefined"?lang:undefined,"translation" in locals_for_with?locals_for_with.translation:typeof translation!=="undefined"?translation:undefined));;return pug_html;}