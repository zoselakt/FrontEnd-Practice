//String.fromCharCode()
  String.fromCharCode(65, 66, 67); // "ABC"

//String.fromCodePoint()
  String.fromCodePoint(65, 66, 67); // "ABC"

//문자열 추출
  var str = "abcDEFabc";
    str.slice(2, 6);     // cDEF     -> 인덱스 2부터 인덱스 5까지의 문자열을 추출함.
    str.slice(-4, -2);   // Fa       -> 음수로 전달된 인덱스는 문자열의 뒤에서부터 시작함.
    str.slice(2);        // abcDEFab -> 인수로 종료 인덱스가 전달되지 않으면 문자열의 마지막까지 추출함.
    str.substring(2, 6); // cDEF
    str.substr(2, 4);    // cDEF
