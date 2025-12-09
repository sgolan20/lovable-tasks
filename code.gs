function doGet(e) {
  // אם יש פרמטר page, הצג את הדף המתאים
  var page = e.parameter.page || 'index';
  return HtmlService.createHtmlOutputFromFile(page);
}
