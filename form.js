
const st = require('@mountbuild/script-tree')

const list = [
  { i: "i~&__", o: "\u1472", name: 'Nasal German i with extra low tone' },
  { i: "i~&_", o: "\u1464", name: 'Nasal German i with low tone' },
  { i: "i~&^^", o: "\u1460", name: 'Nasal German i with extra high tone' },
  { i: "i~&^", o: "\u146c", name: 'Nasal German i with high tone' },
  { i: "i~&", o: "\u1468", name: 'Nasal German i' },
  { i: "(i~&__)", o: "\u1473", name: 'Nasal German i with extra low tone and stress' },
  { i: "(i~&_)", o: "\u1465", name: 'Nasal German i with low tone and stress' },
  { i: "(i~&^^)", o: "\u1461", name: 'Nasal German i with extra high tone and stress' },
  { i: "(i~&^)", o: "\u146d", name: 'Nasal German i with high tone and stress' },
  { i: "(i~&)", o: "\u1469", name: 'Nasal German i with stress' },

  { i: "i~__", o: "\u1478", name: 'German i with extra low tone' },
  { i: "i~_", o: "\u03d6", name: 'German i with low tone' },
  { i: "i~^^", o: "\u147c", name: 'German i with extra high tone' },
  { i: "i~^", o: "\u03da", name: 'German i with high tone' },
  { i: "i~", o: "\u03d1", name: 'German i' },
  { i: "(i~__)", o: "\u1479", name: 'German i with extra low tone and stress' },
  { i: "(i~_)", o: "\u03d7", name: 'German i with low tone and stress' },
  { i: "(i~^^)", o: "\u147d", name: 'German i with extra high tone and stress' },
  { i: "(i~^)", o: "\u03db", name: 'German i with high tone and stress' },
  { i: "(i~)", o: "\u03d3", name: 'German i with stress' },

  { i: "i+&__", o: "\u1470", name: 'Nasal short i with extra low tone' },
  { i: "i+&_", o: "\u1462", name: 'Nasal short i with low tone' },
  { i: "i+&^^", o: "\u146e", name: 'Nasal short i with extra high tone' },
  { i: "i+&^", o: "\u146a", name: 'Nasal short i with high tone' },
  { i: "i+&", o: "\u1466", name: 'Nasal short i' },
  { i: "(i+&__)", o: "\u1471", name: 'Nasal short i with extra low tone and stress' },
  { i: "(i+&_)", o: "\u1463", name: 'Nasal short i with low tone and stress' },
  { i: "(i+&^^)", o: "\u146f", name: 'Nasal short i with extra high tone and stress' },
  { i: "(i+&^)", o: "\u146b", name: 'Nasal short i with high tone and stress' },
  { i: "(i+&)", o: "\u1467", name: 'Nasal short i with stress' },

  { i: "i+__", o: "\u147a", name: 'Short i with extra low tone' },
  { i: "i+_", o: "\u03d4", name: 'Short i with low tone' },
  { i: "i+^^", o: "\u147e", name: 'Short i with extra high tone' },
  { i: "i+^", o: "\u03d8", name: 'Short i with high tone' },
  { i: "i+", o: "\u03d0", name: 'Short i' },
  { i: "(i+__)", o: "\u147b", name: 'Short i with extra low tone and stress' },
  { i: "(i+_)", o: "\u03d5", name: 'Short i with low tone and stress' },
  { i: "(i+^^)", o: "\u147f", name: 'Short i with extra high tone and stress' },
  { i: "(i+^)", o: "\u03d9", name: 'Short i with high tone and stress' },
  { i: "(i+)", o: "\u03d2", name: 'Short i with stress' },

  { i: "i&__", o: "\u1530", name: 'Nasal i sound with extra low tone' },
  { i: "i&_", o: "\u1522", name: 'Nasal i sound with low tone' },
  { i: "i&^^", o: "\u152e", name: 'Nasal i sound with extra high tone' },
  { i: "i&^", o: "\u152a", name: 'Nasal i sound with high tone' },
  { i: "i&", o: "\u1526", name: 'Nasal i sound' },
  { i: "(i&__)", o: "\u1531", name: 'Nasal i sound with extra low tone and stress' },
  { i: "(i&_)", o: "\u1523", name: 'Nasal i sound with low tone and stress' },
  { i: "(i&^^)", o: "\u152f", name: 'Nasal i sound with extra high tone and stress' },
  { i: "(i&^)", o: "\u152b", name: 'Nasal i sound with high tone and stress' },
  { i: "(i&)", o: "\u1527", name: 'Nasal i sound with stress' },

  { i: "i__", o: "\u153a", name: 'I sound with extra low tone' },
  { i: "i_", o: "\u0474", name: 'I sound with low tone' },
  { i: "i^^", o: "\u153e", name: 'I sound with extra high tone' },
  { i: "i^", o: "\u0478", name: 'I sound with high tone' },
  { i: "i", o: "\u0470", name: 'I sound' },
  { i: "(i__)", o: "\u153b", name: 'I sound with extra low tone and stress' },
  { i: "(i_)", o: "\u0475", name: 'I sound with low tone and stress' },
  { i: "(i^^)", o: "\u153f", name: 'I sound with extra high tone and stress' },
  { i: "(i^)", o: "\u0479", name: 'I sound with high tone and stress' },
  { i: "(i)", o: "\u0472", name: 'I sound with stress' },

  { i: "e~&__", o: "\u1512", name: 'Nasal Danish oe with extra low tone' },
  { i: "e~&_", o: "\u1504", name: 'Nasal Danish oe with low tone' },
  { i: "e~&^^", o: "\u1500", name: 'Nasal Danish oe with extra high tone' },
  { i: "e~&^", o: "\u150c", name: 'Nasal Danish oe with high tone' },
  { i: "e~&", o: "\u1508", name: 'Nasal Danish oe' },
  { i: "(e~&__)", o: "\u1513", name: 'Nasal Danish oe with extra low tone and stress' },
  { i: "(e~&_)", o: "\u1505", name: 'Nasal Danish oe with low tone and stress' },
  { i: "(e~&^^)", o: "\u1501", name: 'Nasal Danish oe with extra high tone and stress' },
  { i: "(e~&^)", o: "\u150d", name: 'Nasal Danish oe with high tone and stress' },
  { i: "(e~&)", o: "\u1509", name: 'Nasal Danish oe with stress' },

  { i: "e~__", o: "\u1518", name: 'Danish oe with extra low tone' },
  { i: "e~_", o: "\u0456", name: 'Danish oe with low tone' },
  { i: "e~^^", o: "\u151c", name: 'Danish oe with extra high tone' },
  { i: "e~^", o: "\u045a", name: 'Danish oe with high tone' },
  { i: "e~", o: "\u0451", name: 'Danish oe' },
  { i: "(e~__)", o: "\u1519", name: 'Danish oe with extra low tone and stress' },
  { i: "(e~_)", o: "\u0457", name: 'Danish oe with low tone and stress' },
  { i: "(e~^^)", o: "\u151d", name: 'Danish oe with extra high tone and stress' },
  { i: "(e~^)", o: "\u045b", name: 'Danish oe with high tone and stress' },
  { i: "(e~)", o: "\u0453", name: 'Danish oe with stress' },

  { i: "e+&__", o: "\u1510", name: 'Nasal short e with extra low tone' },
  { i: "e+&_", o: "\u1502", name: 'Nasal short e with low tone' },
  { i: "e+&^^", o: "\u150e", name: 'Nasal short e with extra high tone' },
  { i: "e+&^", o: "\u150a", name: 'Nasal short e with high tone' },
  { i: "e+&", o: "\u1506", name: 'Nasal short e' },
  { i: "(e+&__)", o: "\u1511", name: 'Nasal short e with extra low tone and stress' },
  { i: "(e+&_)", o: "\u1503", name: 'Nasal short e with low tone and stress' },
  { i: "(e+&^^)", o: "\u150f", name: 'Nasal short e with extra high tone and stress' },
  { i: "(e+&^)", o: "\u150b", name: 'Nasal short e with high tone and stress' },
  { i: "(e+&)", o: "\u1507", name: 'Nasal short e with stress' },

  { i: "e+__", o: "\u151a", name: 'Short e with extra low tone' },
  { i: "e+_", o: "\u0454", name: 'Short e with low tone' },
  { i: "e+^^", o: "\u151e", name: 'Short e with extra high tone' },
  { i: "e+^", o: "\u0458", name: 'Short e with high tone' },
  { i: "e+", o: "\u0450", name: 'Short e' },
  { i: "(e+__)", o: "\u151b", name: 'Short e with extra low tone and stress' },
  { i: "(e+_)", o: "\u0455", name: 'Short e with low tone and stress' },
  { i: "(e+^^)", o: "\u151f", name: 'Short e with extra high tone and stress' },
  { i: "(e+^)", o: "\u0459", name: 'Short e with high tone and stress' },
  { i: "(e+)", o: "\u0452", name: 'Short e with stress' },

  { i: "e&__", o: "\u14d0", name: 'Nasal e sound with extra low tone' },
  { i: "e&_", o: "\u14c2", name: 'Nasal e sound with low tone' },
  { i: "e&^^", o: "\u14ce", name: 'Nasal e sound with extra high tone' },
  { i: "e&^", o: "\u14ca", name: 'Nasal e sound with high tone' },
  { i: "e&", o: "\u14c6", name: 'Nasal e sound' },
  { i: "(e&__)", o: "\u14d1", name: 'Nasal e sound with extra low tone and stress' },
  { i: "(e&_)", o: "\u14c3", name: 'Nasal e sound with low tone and stress' },
  { i: "(e&^^)", o: "\u14cf", name: 'Nasal e sound with extra high tone and stress' },
  { i: "(e&^)", o: "\u14cb", name: 'Nasal e sound with high tone and stress' },
  { i: "(e&)", o: "\u14c7", name: 'Nasal e sound with stress' },

  { i: "e__", o: "\u14da", name: 'E sound with extra low tone' },
  { i: "e_", o: "\u0414", name: 'E sound with low tone' },
  { i: "e^^", o: "\u14de", name: 'E sound with extra high tone' },
  { i: "e^", o: "\u0418", name: 'E sound with high tone' },
  { i: "e", o: "\u0410", name: 'E sound' },
  { i: "(e__)", o: "\u14db", name: 'E sound with extra low tone and stress' },
  { i: "(e_)", o: "\u0415", name: 'E sound with low tone and stress' },
  { i: "(e^^)", o: "\u14df", name: 'E sound with extra high tone and stress' },
  { i: "(e^)", o: "\u0419", name: 'E sound with high tone and stress' },
  { i: "(e)", o: "\u0412", name: 'E sound with stress' },

  { i: "a+~&__", o: "\u1492", name: 'Nasal Danish æ with extra low tone' },
  { i: "a+~&_", o: "\u148e", name: 'Nasal Danish æ with low tone' },
  { i: "a+~&^^", o: "\u148a", name: 'Nasal Danish æ with extra high tone' },
  { i: "a+~&^", o: "\u1486", name: 'Nasal Danish æ with high tone' },
  { i: "a+~&", o: "\u1482", name: 'Nasal Danish æ' },
  { i: "(a+~&__)", o: "\u1493", name: 'Nasal Danish æ with extra low tone and stress' },
  { i: "(a+~&_)", o: "\u148f", name: 'Nasal Danish æ with low tone and stress' },
  { i: "(a+~&^^)", o: "\u148b", name: 'Nasal Danish æ with extra high tone and stress' },
  { i: "(a+~&^)", o: "\u1487", name: 'Nasal Danish æ with high tone and stress' },
  { i: "(a+~&)", o: "\u1483", name: 'Nasal Danish æ with stress' },

  { i: "a+~__", o: "\u1498", name: 'Danish æ with extra low tone' },
  { i: "a+~_", o: "\u03b6", name: 'Danish æ with low tone' },
  { i: "a+~^^", o: "\u149c", name: 'Danish æ with extra high tone' },
  { i: "a+~^", o: "\u03ba", name: 'Danish æ with high tone' },
  { i: "a+~", o: "\u03b1", name: 'Danish æ' },
  { i: "(a+~__)", o: "\u1499", name: 'Danish æ with extra low tone and stress' },
  { i: "(a+~_)", o: "\u03b7", name: 'Danish æ with low tone and stress' },
  { i: "(a+~^^)", o: "\u149d", name: 'Danish æ with extra high tone and stress' },
  { i: "(a+~^)", o: "\u03bb", name: 'Danish æ with high tone and stress' },
  { i: "(a+~)", o: "\u03b3", name: 'Danish æ with stress' },

  { i: "a~&__", o: "\u1592", name: 'Nasal German e sound with extra low tone' },
  { i: "a~&_", o: "\u1584", name: 'Nasal German e sound with low tone' },
  { i: "a~&^^", o: "\u1580", name: 'Nasal German e sound with extra high tone' },
  { i: "a~&^", o: "\u158c", name: 'Nasal German e sound with high tone' },
  { i: "a~&", o: "\u1588", name: 'Nasal German e sound' },
  { i: "(a~&__)", o: "\u1593", name: 'Nasal German e sound with extra low tone and stress' },
  { i: "(a~&_)", o: "\u1585", name: 'Nasal German e sound with low tone and stress' },
  { i: "(a~&^^)", o: "\u1581", name: 'Nasal German e sound with extra high tone and stress' },
  { i: "(a~&^)", o: "\u158d", name: 'Nasal German e sound with high tone and stress' },
  { i: "(a~&)", o: "\u1589", name: 'Nasal German e sound with stress' },

  { i: "a~__", o: "\u1598", name: 'German e sound with extra low tone' },
  { i: "a~_", o: "\u0506", name: 'German e sound with low tone' },
  { i: "a~^^", o: "\u159c", name: 'German e sound with extra high tone' },
  { i: "a~^", o: "\u050a", name: 'German e sound with high tone' },
  { i: "a~", o: "\u0501", name: 'German e sound' },
  { i: "(a~__)", o: "\u1599", name: 'German e sound with extra low tone and stress' },
  { i: "(a~_)", o: "\u0507", name: 'German e sound with low tone and stress' },
  { i: "(a~^^)", o: "\u159d", name: 'German e sound with extra high tone and stress' },
  { i: "(a~^)", o: "\u050b", name: 'German e sound with high tone and stress' },
  { i: "(a~)", o: "\u0503", name: 'German e sound with stress' },

  { i: "a+&__", o: "\u1490", name: 'Nasal short a with extra low tone' },
  { i: "a+&_", o: "\u148c", name: 'Nasal short a with low tone' },
  { i: "a+&^^", o: "\u1488", name: 'Nasal short a with extra high tone' },
  { i: "a+&^", o: "\u1484", name: 'Nasal short a with high tone' },
  { i: "a+&", o: "\u1480", name: 'Nasal short a' },
  { i: "(a+&__)", o: "\u1491", name: 'Nasal short a with extra low tone and stress' },
  { i: "(a+&_)", o: "\u148d", name: 'Nasal short a with low tone and stress' },
  { i: "(a+&^^)", o: "\u1489", name: 'Nasal short a with extra high tone and stress' },
  { i: "(a+&^)", o: "\u1485", name: 'Nasal short a with high tone and stress' },
  { i: "(a+&)", o: "\u1481", name: 'Nasal short a with stress' },

  { i: "a+__", o: "\u149a", name: 'Short a with extra low tone' },
  { i: "a+_", o: "\u03b4", name: 'Short a with low tone' },
  { i: "a+^^", o: "\u149e", name: 'Short a with extra high tone' },
  { i: "a+^", o: "\u03b8", name: 'Short a with high tone' },
  { i: "a+", o: "\u03b0", name: 'Short a' },
  { i: "(a+__)", o: "\u149b", name: 'Short a with extra low tone and stress' },
  { i: "(a+_)", o: "\u03b5", name: 'Short a with low tone and stress' },
  { i: "(a+^^)", o: "\u149f", name: 'Short a with extra high tone and stress' },
  { i: "(a+^)", o: "\u03b9", name: 'Short a with high tone and stress' },
  { i: "(a+)", o: "\u03b2", name: 'Short a with stress' },

  { i: "a&__", o: "\u1590", name: 'Nasal a sound with extra low tone' },
  { i: "a&_", o: "\u1582", name: 'Nasal a sound with low tone' },
  { i: "a&^^", o: "\u158e", name: 'Nasal a sound with extra high tone' },
  { i: "a&^", o: "\u158a", name: 'Nasal a sound with high tone' },
  { i: "a&", o: "\u1586", name: 'Nasal a sound' },
  { i: "(a&__)", o: "\u1591", name: 'Nasal a sound with extra low tone and stress' },
  { i: "(a&_)", o: "\u1583", name: 'Nasal a sound with low tone and stress' },
  { i: "(a&^^)", o: "\u158f", name: 'Nasal a sound with extra high tone and stress' },
  { i: "(a&^)", o: "\u158b", name: 'Nasal a sound with high tone and stress' },
  { i: "(a&)", o: "\u1587", name: 'Nasal a sound with stress' },

  { i: "a__", o: "\u159a", name: 'A sound with extra low tone' },
  { i: "a_", o: "\u0504", name: 'A sound with low tone' },
  { i: "a^^", o: "\u159e", name: 'A sound with extra high tone' },
  { i: "a^", o: "\u0508", name: 'A sound with high tone' },
  { i: "a", o: "\u0500", name: 'A sound' },
  { i: "(a__)", o: "\u159b", name: 'A sound with extra low tone and stress' },
  { i: "(a_)", o: "\u0505", name: 'A sound with low tone and stress' },
  { i: "(a^^)", o: "\u159f", name: 'A sound with extra high tone and stress' },
  { i: "(a^)", o: "\u0509", name: 'A sound with high tone and stress' },
  { i: "(a)", o: "\u0502", name: 'A sound with stress' },

  { i: "o~&__", o: "\u1450", name: 'Nasal German o with extra low tone' },
  { i: "o~&_", o: "\u1442", name: 'Nasal German o with low tone' },
  { i: "o~&^^", o: "\u144e", name: 'Nasal German o with extra high tone' },
  { i: "o~&^", o: "\u144a", name: 'Nasal German o with high tone' },
  { i: "o~&", o: "\u1446", name: 'Nasal German o' },
  { i: "(o~&__)", o: "\u1451", name: 'Nasal German o with extra low tone and stress' },
  { i: "(o~&_)", o: "\u1443", name: 'Nasal German o with low tone and stress' },
  { i: "(o~&^^)", o: "\u144f", name: 'Nasal German o with extra high tone and stress' },
  { i: "(o~&^)", o: "\u144b", name: 'Nasal German o with high tone and stress' },
  { i: "(o~&)", o: "\u1447", name: 'Nasal German o with stress' },

  { i: "o~__", o: "\u145a", name: 'German o with extra low tone' },
  { i: "o~_", o: "\u0394", name: 'German o with low tone' },
  { i: "o~^^", o: "\u145e", name: 'German o with extra high tone' },
  { i: "o~^", o: "\u0398", name: 'German o with high tone' },
  { i: "o~", o: "\u0390", name: 'German o' },
  { i: "(o~__)", o: "\u145b", name: 'German o with extra low tone and stress' },
  { i: "(o~_)", o: "\u0395", name: 'German o with low tone and stress' },
  { i: "(o~^^)", o: "\u145f", name: 'German o with extra high tone and stress' },
  { i: "(o~^)", o: "\u0399", name: 'German o with high tone and stress' },
  { i: "(o~)", o: "\u0392", name: 'German o with stress' },

  { i: "o+&__", o: "\u1550", name: 'Nasal short o with extra low tone' },
  { i: "o+&_", o: "\u1542", name: 'Nasal short o with low tone' },
  { i: "o+&^^", o: "\u154e", name: 'Nasal short o with extra high tone' },
  { i: "o+&^", o: "\u154a", name: 'Nasal short o with high tone' },
  { i: "o+&", o: "\u1546", name: 'Nasal short o' },
  { i: "(o+&__)", o: "\u1551", name: 'Nasal short o with extra low tone and stress' },
  { i: "(o+&_)", o: "\u1543", name: 'Nasal short o with low tone and stress' },
  { i: "(o+&^^)", o: "\u154f", name: 'Nasal short o with extra high tone and stress' },
  { i: "(o+&^)", o: "\u154b", name: 'Nasal short o with high tone and stress' },
  { i: "(o+&)", o: "\u1547", name: 'Nasal short o stress' },

  { i: "o+__", o: "\u155a", name: 'Short o with extra low tone' },
  { i: "o+_", o: "\u04c4", name: 'Short o with low tone' },
  { i: "o+^^", o: "\u155e", name: 'Short o with extra high tone' },
  { i: "o+^", o: "\u04c8", name: 'Short o with high tone' },
  { i: "o+", o: "\u04c0", name: 'Short o' },
  { i: "(o+__)", o: "\u155b", name: 'Short o with extra low tone and stress' },
  { i: "(o+_)", o: "\u04c5", name: 'Short o with low tone and stress' },
  { i: "(o+^^)", o: "\u155f", name: 'Short o with extra high tone and stress' },
  { i: "(o+^)", o: "\u04c9", name: 'Short o with high tone and stress' },
  { i: "(o+)", o: "\u04c2", name: 'Short o stress' },

  { i: "o&__", o: "\u1570", name: 'Nasal o sound with extra low tone' },
  { i: "o&_", o: "\u1562", name: 'Nasal o sound with low tone' },
  { i: "o&^^", o: "\u156e", name: 'Nasal o sound with extra high tone' },
  { i: "o&^", o: "\u156a", name: 'Nasal o sound with high tone' },
  { i: "o&", o: "\u1566", name: 'Nasal o sound' },
  { i: "(o&__)", o: "\u1571", name: 'Nasal o sound with extra low tone and stress' },
  { i: "(o&_)", o: "\u1563", name: 'Nasal o sound with low tone and stress' },
  { i: "(o&^^)", o: "\u156f", name: 'Nasal o sound with extra high tone and stress' },
  { i: "(o&^)", o: "\u156b", name: 'Nasal o sound with high tone and stress' },
  { i: "(o&)", o: "\u1567", name: 'Nasal o sound with stress' },

  { i: "o__", o: "\u157a", name: 'O sound with extra low tone' },
  { i: "o_", o: "\u04e4", name: 'O sound with low tone' },
  { i: "o^^", o: "\u157e", name: 'O sound with extra high tone' },
  { i: "o^", o: "\u04e8", name: 'O sound with high tone' },
  { i: "o", o: "\u04e0", name: 'O sound' },
  { i: "(o__)", o: "\u157b", name: 'O sound with extra low tone and stress' },
  { i: "(o_)", o: "\u04e5", name: 'O sound with low tone and stress' },
  { i: "(o^^)", o: "\u157f", name: 'O sound with extra high tone and stress' },
  { i: "(o^)", o: "\u04e9", name: 'O sound with high tone and stress' },
  { i: "(o)", o: "\u04e2", name: 'O sound with stress' },

  { i: "u~&__", o: "\u14f0", name: 'Nasal English r with extra low tone' },
  { i: "u~&_", o: "\u14e2", name: 'Nasal English r with low tone' },
  { i: "u~&^^", o: "\u14ee", name: 'Nasal English r with extra high tone' },
  { i: "u~&^", o: "\u14ea", name: 'Nasal English r with high tone' },
  { i: "u~&", o: "\u14e6", name: 'Nasal English r' },
  { i: "(u~&__)", o: "\u14f1", name: 'Nasal English r with extra low tone and stress' },
  { i: "(u~&_)", o: "\u14e3", name: 'Nasal English r with low tone and stress' },
  { i: "(u~&^^)", o: "\u14ef", name: 'Nasal English r with extra high tone and stress' },
  { i: "(u~&^)", o: "\u14eb", name: 'Nasal English r with high tone and stress' },
  { i: "(u~&)", o: "\u14e7", name: 'Nasal English r with stress' },

  { i: "u~__", o: "\u14fa", name: 'English r with extra low tone' },
  { i: "u~_", o: "\u0434", name: 'English r with low tone' },
  { i: "u~^^", o: "\u14fe", name: 'English r with extra high tone' },
  { i: "u~^", o: "\u0438", name: 'English r with high tone' },
  { i: "u~", o: "\u0430", name: 'English r' },
  { i: "(u~__)", o: "\u14fb", name: 'English r with extra low tone and stress' },
  { i: "(u~_)", o: "\u0435", name: 'English r with low tone and stress' },
  { i: "(u~^^)", o: "\u14ff", name: 'English r with extra high tone and stress' },
  { i: "(u~^)", o: "\u0439", name: 'English r with high tone and stress' },
  { i: "(u~)", o: "\u0432", name: 'English r with stress' },

  { i: "u+&__", o: "\u15b0", name: 'Nasal short u with extra low tone' },
  { i: "u+&_", o: "\u15a2", name: 'Nasal short u with low tone' },
  { i: "u+&^^", o: "\u15ae", name: 'Nasal short u with extra high tone' },
  { i: "u+&^", o: "\u15aa", name: 'Nasal short u with high tone' },
  { i: "u+&", o: "\u15a6", name: 'Nasal short u' },
  { i: "(u+&__)", o: "\u15b1", name: 'Nasal short u with extra low tone and stress' },
  { i: "(u+&_)", o: "\u15a3", name: 'Nasal short u with low tone and stress' },
  { i: "(u+&^^)", o: "\u15af", name: 'Nasal short u with extra high tone and stress' },
  { i: "(u+&^)", o: "\u15ab", name: 'Nasal short u with high tone and stress' },
  { i: "(u+&)", o: "\u15a7", name: 'Nasal short u with stress' },

  { i: "u+__", o: "\u15ba", name: 'Short u with extra low tone' },
  { i: "u+_", o: "\u04a4", name: 'Short u with low tone' },
  { i: "u+^^", o: "\u15be", name: 'Short u with extra high tone' },
  { i: "u+^", o: "\u04a8", name: 'Short u with high tone' },
  { i: "u+", o: "\u04a0", name: 'Short u' },
  { i: "(u+__)", o: "\u15bb", name: 'Short u with extra low tone and stress' },
  { i: "(u+_)", o: "\u04a5", name: 'Short u with low tone and stress' },
  { i: "(u+^^)", o: "\u15bf", name: 'Short u with extra high tone and stress' },
  { i: "(u+^)", o: "\u04a9", name: 'Short u with high tone and stress' },
  { i: "(u+)", o: "\u04a2", name: 'Short u with stress' },

  { i: "u&__", o: "\u14b0", name: 'Nasal u sound with extra low tone' },
  { i: "u&_", o: "\u14a2", name: 'Nasal u sound with low tone' },
  { i: "u&^^", o: "\u14ae", name: 'Nasal u sound with extra high tone' },
  { i: "u&^", o: "\u14aa", name: 'Nasal u sound with high tone' },
  { i: "u&", o: "\u14a6", name: 'Nasal u sound' },
  { i: "(u&__)", o: "\u14b1", name: 'Nasal u sound with extra low tone and stress' },
  { i: "(u&_)", o: "\u14a3", name: 'Nasal u sound with low tone and stress' },
  { i: "(u&^^)", o: "\u14af", name: 'Nasal u sound with extra high tone and stress' },
  { i: "(u&^)", o: "\u14ab", name: 'Nasal u sound with high tone and stress' },
  { i: "(u&)", o: "\u14a7", name: 'Nasal u sound with stress' },

  { i: "u__", o: "\u14ba", name: 'U sound with extra low tone' },
  { i: "u_", o: "\u03f4", name: 'U sound with low tone' },
  { i: "u^^", o: "\u14be", name: 'U sound with extra high tone' },
  { i: "u^", o: "\u03f8", name: 'U sound with high tone' },
  { i: "u", o: "\u03f0", name: 'U sound' },
  { i: "(u__)", o: "\u14bb", name: 'U sound with extra low tone and stress' },
  { i: "(u_)", o: "\u03f5", name: 'U sound with low tone and stress' },
  { i: "(u^^)", o: "\u14bf", name: 'U sound with extra high tone and stress' },
  { i: "(u^)", o: "\u03f9", name: 'U sound with high tone and stress' },
  { i: "(u)", o: "\u03f2", name: 'U sound with stress' },

  { i: "m+", o: "\u0102", name: 'M sound with nasal quality' },
  { i: "m", o: "\u0100", name: 'M sound' },
  { i: "n+", o: "\u0142", name: 'Indian n sound' },
  { i: "n", o: "\u0140", name: 'N sound' },
  { i: "q", o: "\u0160", name: 'Ng sound' },
  { i: "g?", o: "\u0138", name: 'Implosive g sound' },
  { i: "g.", o: "\u135a", name: 'Stop g sound' },
  { i: "g@", o: "\u1357", name: 'Tense g sound' },
  { i: "g", o: "\u0130", name: 'G sound' },
  { i: "'", o: "\u01b0", name: 'Lack of sound, glottal stop' },
  { i: "\"", o: "\u01b2", name: 'Arabic voiced pharyngeal fricative' },
  { i: "d~", o: "\u00d1", name: 'Arabic d sound' },
  { i: "d!", o: "\u006c", name: 'Ejective d sound' },
  { i: "d?", o: "\u0068", name: 'Implosive d sound' },
  { i: "d*", o: "\u0064", name: 'Click d sound' },
  { i: "d+", o: "\u0062", name: 'Indian d sound' },
  { i: "d.", o: "\u123a", name: 'Stop d sound' },
  { i: "d@", o: "\u1237", name: 'Tense d sound' },
  { i: "d", o: "\u0060", name: 'D sound' },
  { i: "b?", o: "\u0048", name: 'Implosive b sound' },
  { i: "b!", o: "\u004c", name: 'Ejective b sound' },
  { i: "b.", o: "\u121a", name: 'Stop b sound' },
  { i: "b@", o: "\u1217", name: 'Tense b sound' },
  { i: "b", o: "\u0040", name: 'B sound' },
  { i: "p!", o: "\u0038", name: 'Ejective p sound' },
  { i: "p*", o: "\u0034", name: 'Click p sound' },
  { i: "p.", o: "\u120a", name: 'Stop p sound' },
  { i: "p@", o: "\u1207", name: 'Tense p sound' },
  { i: "p", o: "\u0030", name: 'P sound' },
  { i: "t+", o: "\u00d2", name: 'Indian t sound' },
  { i: "t!", o: "\u00dc", name: 'Ejective t sound' },
  { i: "t~", o: "\u00d1", name: 'Arabic t sound' },
  { i: "t*", o: "\u00d4", name: 'Click t sound' },
  { i: "t.", o: "\u129a", name: 'Stop t sound' },
  { i: "t@", o: "\u1297", name: 'Tense t sound' },
  { i: "t", o: "\u00d0", name: 'T sound' },
  { i: "k!", o: "\u0058", name: 'Ejective k sound' },
  { i: "k*", o: "\u0054", name: 'Click k sound' },
  { i: "k+", o: "\u0052", name: 'Arabic Q sound' },
  { i: "k+!", o: "\u0059", name: 'Arabic ejective Q sound' },
  { i: "k.", o: "\u122a", name: 'Stop k sound' },
  { i: "k@", o: "\u1227", name: 'Tense k sound' },
  { i: "k", o: "\u0050", name: 'K sound' },
  { i: "h+", o: "\u0122", name: 'Hebrew harsh h sound' },
  { i: "h", o: "\u0120", name: 'H sound' },
  { i: "j+", o: "\u0152", name: 'Indian j sound' },
  { i: "j", o: "\u0150", name: 'J sound' },
  { i: "s+!", o: "\u007d", name: 'Navajo ls sound ejective' },
  { i: "s!", o: "\u007c", name: 'Navajo s sound ejective' },
  { i: "s+", o: "\u0072", name: 'Navajo s sound' },
  { i: "s~", o: "\u0071", name: 'Arabic s sound' },
  { i: "s.", o: "\u124a", name: 'Stop s sound' },
  { i: "s@", o: "\u1247", name: 'Tense s sound' },
  { i: "s", o: "\u0070", name: 'S sound' },
  { i: "f+", o: "\u00c2", name: 'Labial f sound' },
  { i: "f", o: "\u00c0", name: 'f sound' },
  { i: "v+", o: "\u00f2", name: 'Labial v sound' },
  { i: "v", o: "\u00f0", name: 'V sound' },
  { i: "z+", o: "\u0092", name: 'Zulu dl sound' },
  { i: "z", o: "\u0090", name: 'Z sound' },
  { i: "c+~", o: "\u00b2", name: 'Arabic voiced th sound' },
  { i: "c+", o: "\u00b0", name: 'Voiced th sound' },
  { i: "c", o: "\u0080", name: 'Unvoiced th sound' },
  { i: "l+", o: "\u0172", name: 'Indian l sound' },
  { i: "l*", o: "\u0174", name: 'Click l sound' },
  { i: "l~", o: "\u0171", name: 'Arabic l sound' },
  { i: "l", o: "\u0170", name: 'L sound' },
  { i: "r~", o: "\u01a0", name: 'French r sound' },
  { i: "r+", o: "\u00e2", name: 'Indian r sound' },
  { i: "r", o: "\u00e0", name: 'Single rolling r sound' },
  { i: "x!", o: "\u019c", name: 'Ejective sh sound' },
  { i: "x+", o: "\u0192", name: 'Indian sh sound' },
  { i: "x.", o: "\u141a", name: 'Stop sh sound' },
  { i: "x@", o: "\u1417", name: 'Tense sh sound' },
  { i: "x", o: "\u0190", name: 'Sh sound' },
  { i: "w", o: "\u0110", name: 'W sound' },
  { i: "w+", o: "\u0112", name: 'Welsh w sound' },
  { i: "y", o: "\u0180", name: 'Y sound' },
  { i: "y+", o: "\u0182", name: 'Slight y sound' },
  { i: " ", o: "\u0020", name: 'Hanakana Space' },
  { i: ".", o: "\u0021", name: 'Hanakana Period' },
  { i: ",", o: "\u0024", name: 'Hanakana comma' },
  { i: "(", o: "\u0023", name: 'Hanakana opening parenthesis' },
  { i: ")", o: "\u002b", name: 'Hanakana closing parenthesis' },
  { i: "[", o: "\u0026", name: 'Hanakana opening bracket' },
  { i: "]", o: "\u0027", name: 'Hanakana closing bracket' },
  { i: "|", o: "\u0025", name: 'Hanakana pipe' },
  { i: "#", o: "\u0028", name: 'Hanakana at sign' },
  { i: "/", o: "\u0029", name: 'Hanakana forward slash' },
  { i: "\\", o: "\u002a", name: 'Hanakana backward slash' },
  { i: ":", o: "\u0022", name: 'Hanakana colon' }
]

const tree = st.fork(list)
const form = text => st.form(st.norm(text), tree)

form.list = list

if (typeof module != 'undefined') {
  module.exports = form
}
