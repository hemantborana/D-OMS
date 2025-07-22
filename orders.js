let cart = [];

// Predefined items
let items = [
  {
    "name": "Product SKU-018",
    "sizes": ["T2","T3","T4","T5","T6"],
    "colors": ["BLACK","MASAI","PEARL","SKIN"],
    "colorname": ["BLACK : BLACK, 1029,1049,1099","MASAI : MASAI, 1029,1049,1099","PEARL : PEARL, 1029,1049,1099","SKIN : SKIN, 1029,1049,1099"]
  },
  {
    "name": "Product SKU-015",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","CPM","ODM","SKIN","WHITE"],
    "colorname": ["BLACK : BLACK, 899,949","CPM : CAPRI MELANGE, 899,949","ODM : ORCHID MELANGE, 899,949","SKIN : SKIN, 899,949","WHITE : WHITE, 899,949"]
  },
  {
    "name": "Product SKU-011",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","SKIN","RSBLSH"],
    "colorname": ["BLACK : BLACK, 949","SKIN : SKIN, 949","RSBLSH : ROSE BLUSH, 949"]
  },
  {
    "name": "Product SKU-016",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["BLACK","GRYMRL","PEARL","SKIN","WHITE"],
    "colorname": ["BLACK : BLACK, 479,499","SKIN : SKIN, 479,499","WHITE : WHITE, 479,499","PEARL : PEARL, 479,499","GRYMRL : GREY MELANGE, 479,499"]
  },
  {
    "name": "Product SKU-023",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["GRYMEL","BLACK","BDE","GRW","PLS","WHITE","ROD","LBLU"],
    "colorname": ["GRYMEL : GREY MELANGE, 799,819","BLACK : BLACK, 799,819","BDE : BLUSHING BRIDE, 799,819","PLS : PALE SKIN, 799,819","GRW : GRAPE WINE, 799,819","WHITE : WHITE, 799,819","ROD : ROSE ORCHID, 799,819","LBLU : LAPIS BLUE, 799,819"]
  },
  {
    "name": "Product SKU-022",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["CHYBLS","ECL","SLI","BLACK","RTE","WHITE"],
    "colorname": ["CHYBLS : CHERRY BLOSSOM, 1049","ECL : ECLIPSE, 1049","SLI : SILVER LILAC, 1049","BLACK : BLACK, 1049","RTE : ROSETTE, 1049","WHITE : WHITE, 1049"]
  },
  {
    "name": "Product SKU-003",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","EVEBLU","GRYMRL","GRW","PEARL","SKIN","WHITE","LILAST","LIMAPR"],
    "colorname": ["BLACK : BLACK, 849,899","EVEBLU : EVENING BLUE, 849,899","GRYMRL : GREY MELANGE, 849,899","GRW : GRAPE WINE, 849,899","PEARL : PEARL, 849,899","SKIN : SKIN, 849,899","WHITE : WHITE, 849,899","LILAST : LILAC ASTER, 899,949","LIMAPR : LILAC MARBLE, 849,899"]
  },
  {
    "name": "Product SKU-004",
    "sizes": ["T1","T2","T3","T4","T5","T6"],
    "colors": ["BLACK","PURPLE","SKIN","WHITE","CMG","GSP","ODM","PEARL","RVL","TMG"],
    "colorname": ["BLACK : BLACK, 749,779,819","PURPLE : PURPLE, 749,779,819","SKIN : SKIN, 749,779,819","WHITE : WHITE, 749,779,819","CMG : CHAMBRAY MELANGE, 749,779,819","GSP : GINKOSCATTERED PRINT, 799,829,879","ODM : ORCHID MELANGE, 749,779,819","PEARL : PEARL, 749,779,819","RVL : REVELLO PRINT, 799,829,879","TMG : TOMATO MELANGE, 749,779,819"]
  },
  {
    "name": "Product SKU-020",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["GRW","BLACK","PEARL","SKIN","WHITE"],
    "colorname": ["GRW : GRAPE WINE, 599","BLACK : BLACK, 599","PEARL : PEARL, 599","SKIN : SKIN, 599","WHITE : WHITE, 599"]
  },
  {
    "name": "Product SKU-013",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","PLS","PHB","WHITE"],
    "colorname": ["BLACK : BLACK, 929,979","PLS : PALE SKIN, 929,979","PHB : PEACH BLOSSOM, 929,979","WHITE : WHITE, 929,979"]
  },
  {
    "name": "Product SKU-021",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","RTE","GRW"],
    "colorname": ["BLACK : BLACK, 1299,1349","RTE : ROSETTE, 1299,1349","GRW : GRAPE WINE, 1299,1349"]
  },
  {
    "name": "Product SKU-019",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","PHB","PLS"],
    "colorname": ["BLACK : BLACK, 549","PHB : PEACH BLOSSOM, 549","PLS : PALE SKIN, 549"]
  },
  {
    "name": "Product SKU-001",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["ECL","OLT","RSBLSH","GRW","HOB"],
    "colorname": ["ECL : ECLIPSE, 1099","OLT : PEARL BLUSH, 1099","RSBLSH : ROSE BLUSH, 1099","GRW : GRAPE WINE, 1099","HOB : HONEY BEIGE, 1099"]
  },
  {
    "name": "Product SKU-016",
    "sizes": ["T1","T2","T3"],
    "colors": ["BLACK","PLS"],
    "colorname": ["BLACK : BLACK, 1049,1069","PLS : PALE SKIN, 1049,1069"]
  },
  {
    "name": "Product SKU-031",
    "sizes": ["T6","T1","T2","T3","T4","T5"],
    "colors": ["BLACK","BDE","SKIN","WHITE"],
    "colorname": ["BLACK : BLACK, 699,719","SKIN : SKIN, 699,719","BDE : BLUSHING BRIDE, 699,719","WHITE : WHITE, 699,719,669"]
  },
  {
    "name": "Product SKU-048",
    "sizes": ["T1","T2","T3","T4","T5","T6"],
    "colors": ["BLACK","CMG","GRW","PLS","PBH","RTE","WHITE"],
    "colorname": ["BLACK : BLACK, 1049,1079,1099","CMG : CHAMBRAY MELANGE, 1049,1079,1099","GRW : GRAPE WINE, 1049,1079,1099","PLS : PALE SKIN, 999,1029,1049,1079,1099","PBH : PEACH BLUSH, 999,1029,1049,1079,1099","RTE : ROSETTE, 1049,1079,1099","WHITE : WHITE, 1049,1079,1099"]
  },
  {
    "name": "Product SKU-034",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["NAVY","JETBLK","LILAS","NUTMEG","CHOCOF","CLGR","GOBBLU"],
    "colorname": ["NAVY : NAVY, 949,1049","JETBLK : JET BLACK, 949,1049","LILAS : LILAS, 949,1049","NUTMEG : NUTMEG, 949,1049","CHOCOF : Choco Fudge, 949,1049","CLGR : CLOUD GREY, 949,1049","GOBBLU : Goblin Blue, 949,1049"]
  },
  {
    "name": "Product SKU-044",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["PFPGCO","HTMBCO","STBRPR","GASPPR"],
    "colorname": ["PFPGCO : PAINTED FLOWERPASTEL GREEN COMBO, 1149,1249","HTMBCO : HALFTONE MEDIEVAL BLUE COMBO, 1149,1249","STBRPR : STEP BRUSH PRINT, 1149,1249","GASPPR : GALAXY SPLATTER PRT, 1149,1249"]
  },
  {
    "name": "Product SKU-028",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["LILAS","NUTMEG","NAVY","JETBLK"],
    "colorname": ["LILAS : LILAS, 1299,1399","NUTMEG : NUTMEG, 1299,1399","NAVY : NAVY, 1299,1399","JETBLK : JET BLACK, 1299,1399"]
  },
  {
    "name": "Product SKU-026",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["LILAS","CHOCOF","NAVY","JETBLK"],
    "colorname": ["LILAS : LILAS, 1049,1149","CHOCOF : Choco Fudge, 1049,1149","NAVY : NAVY, 1049,1149","JETBLK : JET BLACK, 1049,1149"]
  },
  {
    "name": "Product SKU-049",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["CYLIME","POBLME","NVYAR","BLKMLG"],
    "colorname": ["CYLIME : CYBER LIME MEL, 699,749","POBLME : POOL BLUE MEL, 699,749","NVYAR : NAVY MELANGE - ACTIVE REFLECTIVE, 699,749","BLKMLG : BLACK MELANGE - ACTIVE REFLECTIVE, 699,749"]
  },
  {
    "name": "Product SKU-030",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["LVCAGR","JBFEGR","LIRUFA","CPKMIP","NAMIPO","JERUFA"],
    "colorname": ["LVCAGR : LAVENDER CALM GRAPHIC, 649,699","JBFEGR : JET BLACK FOREVER GRAPHIC, 649,699","LIRUFA : LILAS-RUN FASTER, 649,699","CPKMIP : CORAL PINK-MIND POSITIVE, 649,699","NAMIPO : NAVY-MIND POSITIVE, 649,699","JERUFA : JETBLK-RUN FASTER, 649,699"]
  },
  {
    "name": "Product SKU-043",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["NAVY","JETBLK","OLVNT","ROUGE","CHIVIO","CHOCOF","NUTMEG","CLGR"],
    "colorname": ["NAVY : NAVY, 1049,1099","JETBLK : JET BLACK, 1049,1099","OLVNT : OLIVE NIGHT, 1049,1099","ROUGE : ROUGE, 1049,1099","CHIVIO : CHINESE VIOLET, 1049","CHOCOF : Choco Fudge, 1049,1099","NUTMEG : NUTMEG, 1049,1099","CLGR : CLOUD GREY, 1049,1099"]
  },
  {
    "name": "Product SKU-045",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["STBRPR","GASPPR"],
    "colorname": ["STBRPR : STEP BRUSH PRINT, 1299,1429","GASPPR : GALAXY SPLATTER PRT, 1299,1429"]
  },
  {
    "name": "Product SKU-037",
    "sizes": ["T2","T3","T4","T5"],
    "colors": ["PEARL","BLACK","PLS","PURPLE","WHITE","ODM"],
    "colorname": ["PEARL : PEARL, 849,929","BLACK : BLACK, 849,929","PLS : PALE SKIN, 849,929","PURPLE : PURPLE, 849,929","WHITE : WHITE, 849,929","ODM : ORCHID MELANGE, 849,929"]
  },
  {
    "name": "Product SKU-040",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["MCP","MCS"],
    "colorname": ["MCP : MULTICOLORPRINT, 729,759","MCS : MULTICOLORSOLID, 659,689"]
  },
  {
    "name": "Product SKU-042",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["MCP","MCS"],
    "colorname": ["MCP : MULTICOLORPRINT, 649,679","MCS : MULTICOLORSOLID, 599,629"]
  },
  {
    "name": "Product SKU-050",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["MCP","MCS"],
    "colorname": ["MCP : MULTICOLORPRINT, 549,579","MCS : MULTICOLORSOLID, 499,529"]
  },
  {
    "name": "Product SKU-039",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["MCP","MCS"],
    "colorname": ["MCP : MULTICOLORPRINT, 729,759","MCS : MULTICOLORSOLID, 659,689"]
  },
  {
    "name": "Product SKU-006",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["MCD","MCM","MCP","MCR"],
    "colorname": ["MCM : MULTICOLORMEDIUM, 629,599","MCP : MULTICOLORPRINT, 679,649","MCD : MULTICOLORDARK, 629,599,1048,998","MCR : MULTICOLORS, 1108,1048"]
  },
  {
    "name": "Product SKU-052",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["MCS"],
    "colorname": ["MCS : MULTICOLORSOLID, 499,519"]
  },
  {
    "name": "Product SKU-033",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["SKIN","WHITE","BLACK"],
    "colorname": ["SKIN : SKIN, 399","WHITE : WHITE, 399","BLACK : BLACK, 399"]
  },
  {
    "name": "Product SKU-032",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","WHITE","NAVY","PHP"],
    "colorname": ["BLACK : BLACK, 299","WHITE : WHITE, 299","NAVY : NAVY, 299","PHP : PEACH PINK, 299"]
  },
  {
    "name": "Product SKU-053",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","SKIN","WHITE"],
    "colorname": ["BLACK : BLACK, 299","SKIN : SKIN, 299","WHITE : WHITE, 299"]
  },
  {
    "name": "Product SKU-054",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["NUTMEG","DARPUR","DRKSLT","DBY"],
    "colorname": ["NUTMEG : NUTMEG, 1299,1399","DARPUR : Dark Purple, 1299,1399","DRKSLT : DARK SLATE, 1299,1399","DBY : DEEP RUBY, 1299"]
  },
  {
    "name": "Product SKU-055",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["CFBDDG","ELGDDG","CHVLEG","CORFAB","NVYFAB","PBGOTH","OBGOTH"],
    "colorname": ["CFBDDG : CBLUE DREAMER GRAPHICS, 699","ELGDDG : ELGR DAY DREAMER GR, 699","CHVLEG : CHIVIOLET LMT EDT GR, 699","CORFAB : CORAL FABULOUS, 699,769","NVYFAB : NAVY FABULOUS, 699,769","PBGOTH : POOLBLUE GOOD THINGS, 699,769","OBGOTH : Orchid BLM GTHS, 699,769"]
  },
  {
    "name": "Product SKU-057",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["FPGAOP","PBTAOP","BLWHCH","GRNCHK","LIBLCK","BLBOPR","VIBLPR","BFT"],
    "colorname": ["FPGAOP : FND PINK GARDEN FLR AOP, 999,1049","PBTAOP : PBLUE TROPICAL LVS AOP, 999,1049","BLWHCH : Black / White Checks, 999,1049","GRNCHK : Green Checks, 999,1049","LIBLCK : LIGHT BLUE CHECKS, 999,1049","BLBOPR : BLUE BOTANICAL PRINT, 999,1049","VIBLPR : VINTAGE BLOOM PRINT, 999,1049","BFT : BLACK FLORAL PRINT, 999,1049"]
  },
  {
    "name": "Product SKU-002",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["ALS","BLACK","OCH","LSBNBL","PSTLIL","WHITE"],
    "colorname": ["ALS : ALMOND SKIN, 1399","BLACK : BLACK, 1399","OCH : ORCHID SMOKE, 1399","LSBNBL : LISBON BLUE, 1399","PSTLIL : PASTEL LILAC, 1399","WHITE : WHITE, 1399"]
  },
  {
    "name": "Product SKU-008",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","ARO","AUM","CLM","WFM","HOB","BRDAPC"],
    "colorname": ["BLACK : BLACK, 1299","AUM : AUTUMN MELODY PRINT, 1399","CLM : PINK CHAMPAGNE, 1299","WFM : WILDFLOWER MELODY, 1399","ARO : AMARANTO PRINT, 1399","HOB : HONEY BEIGE, 1299","BRDAPC : BRANDIED APRICOT, 1299"]
  },
  {
    "name": "Product SKU-025",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","BUFF"],
    "colorname": ["BLACK : BLACK, 1499,1649","BUFF : BUFF, 1499,1649"]
  },
  {
    "name": "Product SKU-046",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","NUDE","STI"],
    "colorname": ["BLACK : BLACK, 1599","NUDE : NUDE, 1599","STI : STRAWBERRY ICE, 1599"]
  },
  {
    "name": "Product SKU-029",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["FRVRR","LBLU","PLUM"],
    "colorname": ["FRVRR : FOREVER ROSE, 1949","LBLU : LAPIS BLUE, 1949","PLUM : PLUM, 1949"]
  },
  {
    "name": "Product SKU-038",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","NSTLGR","HOB"],
    "colorname": ["BLACK : BLACK, 1599","NSTLGR : NOSTALGIA ROSE, 1599","HOB : HONEY BEIGE, 1599"]
  },
  {
    "name": "Product SKU-027",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","HOB"],
    "colorname": ["BLACK : BLACK, 1199,1299","HOB : HONEY BEIGE, 1199,1299"]
  },
  {
    "name": "Product SKU-047",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["LSBNBL","PSTLIL","ALS"],
    "colorname": ["LSBNBL : LISBON BLUE, 1499","PSTLIL : PASTEL LILAC, 1499","ALS : ALMOND SKIN, 1499"]
  },
  {
    "name": "Product SKU-041",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["ALS","PSTLIL","OCH","LSBNBL","JETBLK"],
    "colorname": ["ALS : ALMOND SKIN, 399,409","PSTLIL : PASTEL LILAC, 399,409","OCH : ORCHID SMOKE, 399,409","LSBNBL : LISBON BLUE, 399,409","JETBLK : JET BLACK, 399,409"]
  },
  {
    "name": "Product SKU-014",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["MCS"],
    "colorname": ["MCS : MULTICOLORSOLID, 529,549"]
  },
  {
    "name": "Product SKU-035",
    "sizes": ["T2","T3","T4","T5"],
    "colors": ["CPM","GRW","ODM","SKIN"],
    "colorname": ["CPM : CAPRI MELANGE, 949,979,1049","GRW : GRAPE WINE, 949,979,1049","ODM : ORCHID MELANGE, 949,979,1049","SKIN : SKIN, 949,979,1049"]
  },
  {
    "name": "Product SKU-059",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["JETBLK","HOB","QUP","JADETE","IGY","GRW","NSTLGR","FIRORC"],
    "colorname": ["JETBLK : JET BLACK, 349,359","HOB : HONEY BEIGE, 349,359","QUP : QUEEN PINK, 349,359","JADETE : JADEITE, 349,359","IGY : INK GREY, 349,359","GRW : GRAPE WINE, 349,359","NSTLGR : NOSTALGIA ROSE, 349,359","FIRORC : FAIR ORCHID, 349,359"]
  },
  {
    "name": "Product SKU-060",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["JETBLK","HOB","QUP","JADETE","IGY","GRW","NSTLGR","FIRORC"],
    "colorname": ["JETBLK : JET BLACK, 349,359","HOB : HONEY BEIGE, 349,359","QUP : QUEEN PINK, 349,359","JADETE : JADEITE, 349,359","IGY : INK GREY, 349,359","GRW : GRAPE WINE, 349,359","NSTLGR : NOSTALGIA ROSE, 349,359","FIRORC : FAIR ORCHID, 349,359"]
  },
  {
    "name": "Product SKU-061",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["BLACK","GRW"],
    "colorname": ["BLACK : BLACK, 449,469","GRW : GRAPE WINE, 449,469"]
  },
  {
    "name": "Product SKU-005",
    "sizes": ["T6","T1","T2","T3","T4","T5"],
    "colors": ["CPM","TMG","BLACK","GRYMRL","GRW","PEARL","SKIN","WHITE"],
    "colorname": ["BLACK : BLACK, 429,449","SKIN : SKIN, 429,449","WHITE : WHITE, 429,449","PEARL : PEARL, 429,449","CPM : CAPRI MELANGE, 429,449","TMG : TOMATO MELANGE, 429,449","GRW : GRAPE WINE, 429,449","GRYMRL : GREY MELANGE, 429,449"]
  },
  {
    "name": "Product SKU-036",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","GRW","GRYMEL","PEARL"],
    "colorname": ["BLACK : BLACK, 899,929","GRW : GRAPE WINE, 899,929","GRYMEL : GREY MELANGE, 899,929","PEARL : PEARL, 899,929"]
  },
  {
    "name": "Product SKU-010",
    "sizes": ["T1","T2","T3","T4","T5"],
    "colors": ["BLACK","GRYMEL","NISH"],
    "colorname": ["BLACK : BLACK, 1999","GRYMEL : GREY MELANGE, 1999","NISH : NIGHT SHADE, 1999"]
  },
  {
    "name": "Product SKU-009",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","GRYMEL","PFI","SOLBLK"],
    "colorname": ["BLACK : BLACK, 649,669","GRYMEL : GREY MELANGE, 649,669","PFI : PARFAIT PINK, 649,669","SOLBLK : SOLID BLACK, 649"]
  },
  {
    "name": "Product SKU-007",
    "sizes": ["T1","T2","T3","T4"],
    "colors": ["BLACK","NSH"],
    "colorname": ["BLACK : BLACK, 1999","NSH : NIGHTSHADE, 1999"]
  },
  {
    "name": "Product SKU-062",
    "sizes": ["T2","T3","T4","T5"],
    "colors": ["BLACK","BUFF"],
    "colorname": ["BLACK : BLACK, 1399","BUFF : BUFF, 1399"]
  }
];


 ;
 
// Predefined parties
// Predefined parties - replaced with generic names
let parties = [
  "Retail Partner A",
  "Retail Partner B",
  "Retail Partner C",
  "Retail Partner D",
  "Retail Partner E",
  "Retail Partner F",
  "Retail Partner G",
  "Retail Partner H",
  "Retail Partner I",
  "Retail Partner J",
  "Retail Partner K",
  "cash",
  "Retail Partner L",
  "Retail Partner M",
  "Retail Partner N",
  "Retail Partner O",
  "Retail Partner P",
  "Retail Partner Q",
  "Retail Partner R",
  "Retail Partner S",
  "Retail Partner T",
  "Retail Partner U",
  "Retail Partner V",
  "Retail Partner W",
  "Retail Partner X",
  "Retail Partner Y",
  "Retail Partner Z",
  "Retail Partner AA",
  "Retail Partner AB",
  "Retail Partner AC",
  "Retail Partner AD",
  "Retail Partner AE"
];

document
  .getElementById("saveOrderBtn")
  .addEventListener("click", showOrderSummaryModal);

const partySearch = document.getElementById("partySearch");
const partyList = document.getElementById("partyList");

partySearch.addEventListener("focus", () => showParties());
partySearch.addEventListener("input", () => showParties(partySearch.value));

document.addEventListener("click", function (e) {
  if (e.target !== partySearch && !partyList.contains(e.target)) {
    partyList.style.display = "none";
  }
});


createCartSummaryTable();

document.getElementById("addToCartBtn").addEventListener("click", addToCart);
document
  .getElementById("saveOrderBtn")
  .addEventListener("click", showOrderSummaryModal);


//----------------------------------------party--------------------------------
function sortParties() {
    parties.sort((a, b) => {
      if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b, undefined, { sensitivity: "base" });
      }
      // Handle non-string elements (you can modify this part based on your needs)
      return 0;
    });
  }
  function showParties(filter = "") {
    partyList.innerHTML = "";
    const filteredParties = parties.filter((party) => {
      if (typeof party === "string") {
        return party.toLowerCase().includes(filter.toLowerCase());
      }
      return false; // or handle non-string elements as needed
    });
  
    filteredParties.forEach((party) => {
      const item = document.createElement("a");
      item.classList.add("list-group-item", "list-group-item-action");
      item.textContent = party;
      item.href = "#";
      item.addEventListener("click", function (e) {
        e.preventDefault();
        partySearch.value = party;
        partyList.style.display = "none";
      });
      partyList.appendChild(item);
    });
  
    if (filteredParties.length === 0 && filter !== "") {
      const addNewItem = document.createElement("a");
      addNewItem.classList.add("list-group-item", "list-group-item-action");
      addNewItem.textContent = `Add "${filter}" as a new party`;
      addNewItem.href = "#";
      addNewItem.addEventListener("click", function (e) {
        e.preventDefault();
        addNewParty(filter);
      });
      partyList.appendChild(addNewItem);
    }
  
    partyList.style.display = "block";
  }
  
  function addNewParty(partyInput) {
    const [partyName, area] = partyInput.split(" - ").map((s) => s.trim());
    if (!partyName || !area) {
      alert(
        'Please enter the party name and area in the format "PARTYNAME - AREA"'
      );
      return;
    }
  
    const fullPartyName = `${partyName} - ${area}`;
    if (!parties.includes(fullPartyName)) {
      parties.push(fullPartyName);
      sortParties();
      // Save only the new party to Firebase
      firebase
        .database()
        .ref("parties/" + fullPartyName.replace(".", "_"))
        .set(true);
      console.log(`Added new party: ${fullPartyName}`);
  
      // Log the activity
      const now = new Date();
      const activityLog = {
        action: "Created new party",
        partyName: fullPartyName,
        timestamp: now.toISOString(),
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        username: username,
      };
      firebase.database().ref("activityLogs").push(activityLog);
  
      // Send Telegram message
     
      )}`;
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log("Telegram message sent:", data))
        .catch((error) =>
          console.error("Error sending Telegram message:", error)
        );
    }
    partySearch.value = fullPartyName;
    partyList.style.display = "none";
  }
 

// ---------------------Color Management
function handleColorContainerClick(event) {
  // Check if the click was on the input or label
  if (
    event.target.classList.contains("quantity-input") ||
    event.target.classList.contains("size-label")
  ) {
    return; // Do nothing if the click was on an input or label
  }

  // Toggle the grid if the click was on the container itself
  const colorContainer = event.currentTarget;
  const sizeQuantityGrid = colorContainer.querySelector(".size-quantity-grid");

  if (
    sizeQuantityGrid.style.display === "none" ||
    sizeQuantityGrid.style.display === ""
  ) {
    sizeQuantityGrid.style.display = "block";
  } else {
    sizeQuantityGrid.style.display = "none";
  }
}

function getBackgroundColor(color) {
  const colorMap = {
      'BLACK': 'black',
      'WHITE': '#FFFFFF',
      'GRW': '#341917',
      'GRYMRL': '#d8d7dc',
       'EVB': 'navy',
      'PEARL': '#E6C7B8',
      'SKIN': '#E4C7A7',
      'DIO': 'white',
      'JBK': '#0A0A0A',
      'PCMARG': 'cyan',
      'PSMARG': 'lightpink',
      'EVEBLU': '#222133',
     'CPM': '#D2E3EB',   
      'ODM': '#EEC9D3',  
      'RSBLSH': '#D5868E',  
      'PLS': '#D4C2B6',  
      'GRYMEL': '#d8d7dc',  
      'RTE': '#CC746D',  
      'ECL': '#2F2F4A',  
      'CMG': '#B5C4D8',
     'PURPLE': '#6C2B6A',
      'TMG':'#E67F81',
       'PHB': '#E78A84',
      'OLT':'#E9E2D7',
      'BRI':'#B82230',
      'BDE': '#E2C2BF',
      'PBH':'#D0A095',
      'TSE': '#8DC8D0',
      'PHP':'#EAD4CC',
      'GRS': 'linear-gradient(to left, #341917 50%, #E4C7A7 50%)',
      'WHG': 'linear-gradient(to left, #FFFFFF 50%, #d8d7dc 50%)',
      'PFI': '#FEE0E0',
      'ALS': '#ECD7D7',
      'LSBNBL': '#1B2032',
      'OCH': '#D4979E',
      'PSTLIL':'#E8DDEA',
      'CLM':'#F0EAE5',
      'NISH':'#372C3B',
     
      'NAVY': '#242638',
      'GOBBLU': '#A5BBCF',
      'JETBLK': '#000000',
      'OLVNT':'#483E36',
      'ROUGE':'#EEA49F',
       };
  return colorMap[color.toUpperCase()] || "";
}

function getContrastColor(hexColor) {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black or white based on luminance
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

function createColorContainer(item, color) {
  const backgroundColor = getBackgroundColor(color);
  const textColor = backgroundColor
    ? getContrastColor(backgroundColor)
    : "#000000";
  const containerStyle = backgroundColor
    ? `background-color: ${backgroundColor}; color: ${textColor};`
    : "border: 1px solid #ccc;";

  return `
      <div class="color-container" style="${containerStyle}" data-color="${color}">
          <h4>${color}</h4>
          <div class="size-quantity-grid" style="display: none;">
              ${item.sizes
                .map(
                  (size) => `
                  <div class="size-quantity-row">
                      <label class="size-label" data-size="${size}">${size}</label>
                      <input type="number" name="qty_${color}_${size}" min="0" class="quantity-input">
                  </div>
              `
                )
                .join("")}
          </div>
      </div>
  `;
}

function setupSizeLabelInteractions() {
  document.querySelectorAll('.size-label').forEach(label => {
    let pressTimer;
    let isLongPress = false;
    
    // Handle mouse down (for long press)
    label.addEventListener('mousedown', function(e) {
      isLongPress = false;
      const input = this.nextElementSibling;
      
      // Set timer for long press
      pressTimer = setTimeout(() => {
        isLongPress = true;
        // Long press action - reset to 0
        input.value = 0;
        input.dispatchEvent(new Event('change'));
      }, 500); // 1 second for long press
    });
    
    // Handle mouse up (cancel long press if released early)
    label.addEventListener('mouseup', function(e) {
      clearTimeout(pressTimer);
    });
    
    // Handle mouse leave (cancel long press if mouse leaves)
    label.addEventListener('mouseleave', function(e) {
      clearTimeout(pressTimer);
    });
    
    // Handle click (short press)
    label.addEventListener('click', function(e) {
      if (!isLongPress) {
        const input = this.nextElementSibling;
        const currentValue = parseInt(input.value) || 0;
        input.value = currentValue + 1;
        input.dispatchEvent(new Event('change'));
      }
      isLongPress = false;
    });
    
    // Touch events for mobile devices
    label.addEventListener('touchstart', function(e) {
      isLongPress = false;
      const input = this.nextElementSibling;
      
      pressTimer = setTimeout(() => {
        isLongPress = true;
        input.value = 0;
        input.dispatchEvent(new Event('change'));
      }, 1000);
    });
    
    label.addEventListener('touchend', function(e) {
      clearTimeout(pressTimer);
    });
    
    label.addEventListener('touchcancel', function(e) {
      clearTimeout(pressTimer);
    });
  });
}


function handleNewColorClick(event) {
  event.stopPropagation();
  const colorName = prompt("Enter the name of the new color:");
  if (colorName && colorName.trim() !== "") {
      const newColorName = `${colorName.trim()}(N)`;
      const itemName = document.querySelector("#itemDetailsContainer h3").textContent;
      const item = items.find(i => i.name === itemName);
      if (item) {
          item.colors.push(newColorName);
          showItemDetails(item);
      }
  }
}
//--------- User Interface Navigation
function returnToHomepage() {
  document.getElementById("partySearch").value = "";
  document.getElementById("itemSearch").value = "";
  cart = [];
  updateCartSummary();

  const itemDetailsContainer = document.getElementById("itemDetailsContainer");
  if (itemDetailsContainer) {
    itemDetailsContainer.remove();
  }

  loadPendingOrders(); // Refresh the pending orders list
  console.log("Returned to homepage");
}

function showItemDetails(item) {
  const existingDetailsContainer = document.getElementById("itemDetailsContainer");
  if (existingDetailsContainer) {
    existingDetailsContainer.remove();
  }

  const detailsContainer = document.createElement("div");
  detailsContainer.id = "itemDetailsContainer";
  detailsContainer.innerHTML = `
      <h3 style="text-align: center;">${item.name}</h3>
      <div class="color-containers">
          ${item.colors
            .map((color) => createColorContainer(item, color))
            .join("")}
          ${createColorContainer(item, "[new color]")}
      </div>
  `;

  const itemList = document.getElementById("itemList");
  itemList.insertAdjacentElement("afterend", detailsContainer);

  // Add click event listeners to color containers
  detailsContainer.querySelectorAll(".color-container").forEach((container) => {
    container.addEventListener("click", handleColorContainerClick);
  });

  // Add event listener for the [new color] container
  const newColorContainer = detailsContainer.querySelector('.color-container[data-color="[new color]"]');
  newColorContainer.addEventListener("click", handleNewColorClick);
  
  // Set up the size label interactions after a small delay to ensure DOM is ready
  setTimeout(() => {
    setupSizeLabelInteractions();
  }, 50);
}


function resetItemSelection() {
  document.getElementById("itemSearch").value = "";
  const itemDetailsContainer = document.getElementById("itemDetailsContainer");
  if (itemDetailsContainer) {
    itemDetailsContainer.remove();
  }
}


// ------------------Audio Feedback
function playConfirmationSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(587.33, audioContext.currentTime); // D5
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
}

function playAdvancedConfirmationSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // Create oscillators
  const osc1 = audioContext.createOscillator();
  const osc2 = audioContext.createOscillator();
  
  // Create gain nodes
  const gainNode1 = audioContext.createGain();
  const gainNode2 = audioContext.createGain();
  
  // Configure oscillators
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(587.33, audioContext.currentTime); // D5
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(880, audioContext.currentTime); // A5
  
  // Configure gain nodes
  gainNode1.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode1.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
  gainNode1.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
  
  gainNode2.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode2.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.2);
  gainNode2.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.6);
  
  // Connect nodes
  osc1.connect(gainNode1);
  osc2.connect(gainNode2);
  gainNode1.connect(audioContext.destination);
  gainNode2.connect(audioContext.destination);
  
  // Start and stop the sound
  osc1.start(audioContext.currentTime);
  osc2.start(audioContext.currentTime + 0.1);
  osc1.stop(audioContext.currentTime + 0.5);
  osc2.stop(audioContext.currentTime + 0.6);
} 

//----------------// Notifications



//------------ Item and Cart Management
function calculateTotalQuantity() {
  return cart.reduce((total, item) => {
    return (
      total +
      Object.values(item.colors).reduce((itemTotal, color) => {
        return (
          itemTotal +
          Object.values(color).reduce((colorTotal, qty) => colorTotal + qty, 0)
        );
      }, 0)
    );
  }, 0);
}

function updateItemSearchDatalist() {
  const datalist = document.getElementById("itemList");
  datalist.innerHTML = "";
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    datalist.appendChild(option);
  });
}

function addNewItem(itemName) {
  if (!items.some((item) => item && item.name === itemName)) {
      // Create a modal dynamically
      const modal = document.createElement("div");
      modal.className = "modal fade";
      modal.id = "newItemModal";
      modal.setAttribute("tabindex", "-1");
      modal.innerHTML = `
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">Add New Item</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <div class="mb-3">
                          <label for="itemName" class="form-label">Item Name</label>
                          <input type="text" class="form-control" id="itemName" required>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <h6>Number Cup Size</h6>
                              <div id="numCupSizes" class="row"></div>
                              <div class="mt-2">
                                  <input type="text" class="form-control" id="customNumCupSize" placeholder="Enter custom size">
                              </div>
                          </div>
                          <div class="col-md-6">
                              <h6>General Size</h6>
                              <div id="generalSizes" class="row"></div>
                              <div class="mt-2">
                                  <input type="text" class="form-control" id="customGeneralSize" placeholder="Enter custom size">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" id="saveNewItem">Save Item</button>
                  </div>
              </div>
          </div>
      `;
      document.body.appendChild(modal);

      const newItemModal = new bootstrap.Modal(document.getElementById("newItemModal"));

      const numCupSizes = ["32B", "32C", "32D", "32Z", "34B", "34C", "34D", "34Z", "36B", "36C", "36D", "36Z", "38B", "38C", "38D", "38Z", "40B", "40C", "40D", "42B", "42C"];
      const generalSizes = ["XS", "S", "M", "L", "XL", "2XL"];

      const numCupSizesContainer = document.getElementById("numCupSizes");
      const generalSizesContainer = document.getElementById("generalSizes");

      // Function to create checkbox in a column layout
      function createCheckbox(size, container) {
          const col = document.createElement("div");
          col.className = "col-6 mb-2";
          col.innerHTML = `
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="${size}" id="${size}">
                  <label class="form-check-label" for="${size}">${size}</label>
              </div>
          `;
          container.appendChild(col);
      }

      // Create Number Cup Size checkboxes
      numCupSizes.forEach(size => createCheckbox(size, numCupSizesContainer));

      // Create General Size checkboxes
      generalSizes.forEach(size => createCheckbox(size, generalSizesContainer));

      // Function to handle custom size input
      function handleCustomSizeInput(inputId, containerid) {
          const customSizeInput = document.getElementById(inputId);
          const container = document.getElementById(containerid);

          customSizeInput.addEventListener("blur", () => {
              const customSize = customSizeInput.value.trim();
              if (customSize) {
                  createCheckbox(customSize, container);
                  customSizeInput.value = "";
              }
          });
      }

      // Set up custom size inputs
      handleCustomSizeInput("customNumCupSize", "numCupSizes");
      handleCustomSizeInput("customGeneralSize", "generalSizes");

      // Pre-fill the item name
      document.getElementById("itemName").value = itemName;

      document.getElementById("saveNewItem").addEventListener("click", function () {
          const itemName = document.getElementById("itemName").value.trim();
          if (!itemName) {
              alert("Please enter an item name.");
              return;
          }

          const selectedSizes = [
              ...document.querySelectorAll("#numCupSizes input:checked"),
              ...document.querySelectorAll("#generalSizes input:checked")
          ].map(input => input.value);

          if (selectedSizes.length === 0) {
              alert("Please select at least one size.");
              return;
          }

          const newItem = { name: itemName, sizes: selectedSizes, colors: ["Any Color"] };
          items.push(newItem);
          items.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

          console.log(`Added new item: ${itemName}`);
          alert(`New item "${itemName}" has been added successfully.`);
          newItemModal.hide();
          document.body.removeChild(modal);
          
          document.getElementById("itemSearch").value = itemName;
          document.getElementById("itemList").style.display = "none";
          showItemDetails(newItem);
      });

      newItemModal.show();
  } else {
      console.log(`Item "${itemName}" already exists.`);
      alert(`Item "${itemName}" already exists in the list.`);
  }
} 

function getTotalQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.total, 0);
}

function updateCartButtonText(totalQuantity) {
  const cartButton = document.getElementById("saveOrderBtn");
  cartButton.textContent = `Process Order`;
}

function addToCart() {
  const itemName = document.getElementById("itemSearch").value;
  const item = items.find((i) => i.name === itemName);

  if (!item) {
      alert("Please select a valid item.");
      return;
  }

  const cartItem = {
      name: itemName,
      colors: {},
  };

  let itemAdded = false;
  let itemTotalQuantity = 0;

  // Include all colors, including the new ones with (N)
  item.colors.forEach((color) => {
      cartItem.colors[color] = {};
      item.sizes.forEach((size) => {
          const qty =
              parseInt(
                  document.querySelector(`input[name="qty_${color}_${size}"]`).value
              ) || 0;
          if (qty > 0) {
              cartItem.colors[color][size] = qty;
              itemAdded = true;
              itemTotalQuantity += qty;
          }
      });
  });

  if (!itemAdded) {
      alert("Please select at least one size and quantity.");
      return;
  }

  const existingItemIndex = cart.findIndex((item) => item.name === itemName);
  if (existingItemIndex !== -1) {
      // Merge quantities for existing item
      Object.keys(cartItem.colors).forEach((color) => {
          if (!cart[existingItemIndex].colors[color]) {
              cart[existingItemIndex].colors[color] = {};
          }
          Object.keys(cartItem.colors[color]).forEach((size) => {
              if (cart[existingItemIndex].colors[color][size]) {
                  cart[existingItemIndex].colors[color][size] +=
                      cartItem.colors[color][size];
              } else {
                  cart[existingItemIndex].colors[color][size] =
                      cartItem.colors[color][size];
              }
          });
      });
  } else {
      cart.push(cartItem);
  }

  updateCartSummary();
  updateCartButtonText(calculateTotalQuantity());
  updateItemDetailsAfterAddToCart(item);
}

function updateQuantity(size, change) {
  const input = document.getElementById(`qty_${size}`);
  if (input) {
    let newValue = parseInt(input.value) + change;
    newValue = Math.max(0, newValue); // Ensure non-negative value
    input.value = newValue;
  }
}

function updateItemDetailsAfterAddToCart(item) {
  const detailsContainer = document.getElementById("itemDetailsContainer");
  if (detailsContainer) {
    const colorContainers =
      detailsContainer.querySelectorAll(".color-container");
    colorContainers.forEach((container) => {
      const color = container.dataset.color;
      const sizeQuantityGrid = container.querySelector(".size-quantity-grid");
      const inputs = sizeQuantityGrid.querySelectorAll('input[type="number"]');
      inputs.forEach((input) => {
        input.value = ""; // Reset all inputs
      });
    });
  }

  // Optionally, you can add a visual feedback that the item was added to the cart
  showAddedToCartFeedback();
}

function showAddedToCartFeedback() {
  const feedback = document.createElement("div");
  feedback.textContent = "Added to cart";
  feedback.style.position = "fixed";
  feedback.style.top = "20px";
  feedback.style.right = "20px";
  feedback.style.backgroundColor = "#4CAF50";
  feedback.style.color = "white";
  feedback.style.padding = "10px";
  feedback.style.borderRadius = "5px";
  feedback.style.zIndex = "1000";
  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.remove();
  }, 2000);
}

// --------------Cart Summary
function updateCartSummary() {
  const cartSummary =
    document.getElementById("cartSummary") || createCartSummaryTable();
  const tbody = cartSummary.querySelector("tbody");
  tbody.innerHTML = "";

  let totalQuantity = 0;

  cart.forEach((item, itemIndex) => {
    Object.entries(item.colors).forEach(([color, sizes]) => {
      let colorTotal = 0;
      let sizesAndQuantities = [];

      Object.entries(sizes).forEach(([size, qty]) => {
        if (qty > 0) {
          sizesAndQuantities.push(`${size}/${qty}`);
          colorTotal += qty;
          totalQuantity += qty;
        }
      });

      if (colorTotal > 0) {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${item.name} (${color})</td>
                    <td>${sizesAndQuantities.join(", ")}</td>
                    <td>${colorTotal}</td>
                `;
        row.classList.add("clickable-row");
        row.addEventListener("click", () =>
          showEditItemModal(itemIndex, color, false)
        );
        tbody.appendChild(row);
      }
    });
  });

  // Update total quantity in the cart button
  updateCartButtonText(totalQuantity);
}

function createCartSummaryTable() {
  const table = document.createElement("table");
  table.id = "cartSummary";
  table.className = "table table-bordered mt-4";
  table.innerHTML = `
        <thead>
            <tr>
                <th>Item Name & Color</th>
                <th>Size and Qty</th>
                <th>(T)</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
  document.getElementById("orders").appendChild(table);
  return table;
}

function editCartSummaryItem(
  itemIndex,
  colorIndex,
  isOrderSummaryModal = false
) {
  console.log("editCartSummaryItem called with:", {
    itemIndex,
    colorIndex,
    isOrderSummaryModal,
  });

  try {
    const item = cart[itemIndex];
    if (!item) {
      console.error("Item not found in cart:", itemIndex);
      alert("Error: Item not found in cart.");
      return;
    }

    const colorKeys = Object.keys(item.colors);
    const color = colorKeys[colorIndex];
    if (!color) {
      console.error("Color not found for item:", {
        itemIndex,
        colorIndex,
        colorKeys,
      });
      alert("Error: Color not found for item.");
      return;
    }

    const sizes = Object.keys(item.colors[color]);
    let newTotal = 0;

    sizes.forEach((size) => {
      const newQty = parseInt(document.getElementById(`qty_${size}`).value);
      if (newQty > 0) {
        item.colors[color][size] = newQty;
        newTotal += newQty;
      } else {
        delete item.colors[color][size];
      }
    });

    if (newTotal === 0) {
      // If all quantities for this color are 0, remove the color
      delete item.colors[color];
      if (Object.keys(item.colors).length === 0) {
        // If no colors left, remove the item from cart
        cart.splice(itemIndex, 1);
      }
    }

    updateCartSummary();
    if (isOrderSummaryModal) {
      updateModalCartSummary();
    }

    console.log("Cart updated:", cart);
  } catch (error) {
    console.error("Error in editCartSummaryItem:", error);
    alert(
      "An error occurred while trying to save the changes. Please try again."
    );
  }
}
function deleteCartItem(itemIndex, color, isOrderSummaryModal) {
  const item = cart[itemIndex];
  delete item.colors[color];
  if (Object.keys(item.colors).length === 0) {
    cart.splice(itemIndex, 1);
  }

  updateCartSummary();
  if (isOrderSummaryModal) {
    updateModalCartSummary();
  }
} 

// --------Modals
function createModal(partyName, dateTime, orderNumber) {
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "orderConfirmationModal";
  modal.setAttribute("tabindex", "-1");
  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Order Confirmation</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p><strong>Party Name:</strong> ${partyName}</p>
          <p><strong>Date and Time:</strong> ${new Date(dateTime).toLocaleString()}</p>
          <p><strong>Order Number:</strong> ${orderNumber}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;
  return modal;
}


function updateModalContent(orderNumber) {
  document.getElementById("orderNumberSpan").textContent = orderNumber;
}


function showOrderSummaryModal() {
  console.log("showOrderSummaryModal function called");
  try {
    // Remove existing modal if present
    const existingModal = document.getElementById("orderSummaryModal");
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = "orderSummaryModal";
    modal.setAttribute("tabindex", "-1");
    modal.innerHTML = `
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Order Summary</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Loading order summary...</p>
          </div>
          <div class="modal-footer flex-column align-items-stretch">
            <div class="mb-3 w-100">
              <label for="orderNote" class="form-label">Order Note:</label>
              <textarea class="form-control" id="orderNote" rows="3" placeholder="Enter any special instructions here..."></textarea>
            </div>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="placeOrderBtn">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const modalInstance = new bootstrap.Modal(document.getElementById("orderSummaryModal"));
    modalInstance.show();

    console.log("Modal created and shown");

    // We'll add the content after the modal is shown
    setTimeout(() => {
      try {
        const modalBody = document.querySelector("#orderSummaryModal .modal-body");
        modalBody.innerHTML = `
          <p><strong>Party Name:</strong> <span id="modalPartyName"></span></p>
          <div id="modalCartSummary"></div>
          <p><strong>Total Quantity:</strong> <span id="modalTotalQuantity"></span></p>
        `;

        document.getElementById("modalPartyName").textContent = document.getElementById("partySearch").value;
        updateModalCartSummary();

        // Add event listener to the Place Order button
        document.getElementById("placeOrderBtn").addEventListener("click", handlePlaceOrder);

        console.log("Modal content updated");
      } catch (innerError) {
        console.error("Error updating modal content:", innerError);
        document.querySelector("#orderSummaryModal .modal-body").innerHTML = `<p>Error loading order summary. Please try again.</p>`;
      }
    }, 100);
  } catch (error) {
    console.error("Error in showOrderSummaryModal:", error);
    alert("An error occurred while showing the order summary. Please try again.");
  }
}

function showEditItemModal(itemIndex, color, isOrderSummaryModal = false) {
  const item = cart[itemIndex];
  const sizes = Object.keys(item.colors[color]);

  const existingModal = document.getElementById("editItemModal");
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "editItemModal";
  modal.setAttribute("tabindex", "-1");
  modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Item: ${
                      item.name
                    } (${color})</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${sizes
                      .map(
                        (size) => `
                        <div class="mb-3 d-flex align-items-center">
                            <label class="form-label me-2 mb-0" style="width: 50px;">${size}</label>
                            <div class="input-group" style="width: 150px;">
                                <button class="btn btn-outline-secondary minus-btn" type="button" data-size="${size}">-</button>
                                <input type="number" class="form-control text-center" id="qty_${size}" value="${
                          item.colors[color][size] || 0
                        }" min="0" readonly>
                                <button class="btn btn-outline-secondary plus-btn" type="button" data-size="${size}">+</button>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id="deleteItemBtn">Delete Item</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="saveItemBtn">Save Changes</button>
                </div>
            </div>
        </div>
    `;
  document.body.appendChild(modal);

  const editModalInstance = new bootstrap.Modal(
    document.getElementById("editItemModal")
  );

  // Add event listeners for plus and minus buttons
  modal.querySelectorAll(".minus-btn").forEach((btn) => {
    btn.addEventListener("click", () => updateQuantity(btn.dataset.size, -1));
  });
  modal.querySelectorAll(".plus-btn").forEach((btn) => {
    btn.addEventListener("click", () => updateQuantity(btn.dataset.size, 1));
  });

  document.getElementById("saveItemBtn").addEventListener("click", () => {
    saveItemChanges(itemIndex, color, isOrderSummaryModal);
    editModalInstance.hide();
  });

  document.getElementById("deleteItemBtn").addEventListener("click", () => {
    deleteCartItem(itemIndex, color, isOrderSummaryModal);
    editModalInstance.hide();
  });

  editModalInstance.show();
}
function saveItemChanges(itemIndex, color, isOrderSummaryModal) {
  const item = cart[itemIndex];
  const sizes = Object.keys(item.colors[color]);
  let totalQuantity = 0;

  sizes.forEach((size) => {
    const newQty = parseInt(document.getElementById(`qty_${size}`).value);
    if (newQty > 0) {
      item.colors[color][size] = newQty;
      totalQuantity += newQty;
    } else {
      delete item.colors[color][size];
    }
  });

  if (totalQuantity === 0) {
    delete item.colors[color];
    if (Object.keys(item.colors).length === 0) {
      cart.splice(itemIndex, 1);
    }
  }

  updateCartSummary();
  if (isOrderSummaryModal) {
    updateModalCartSummary();
  }
}

function updateModalCartSummary() {
  const modalBody = document.querySelector("#orderSummaryModal .modal-body");
  if (!modalBody) {
    console.error("Modal body not found");
    return;
  }

  const partyName = document.getElementById("partySearch").value || "N/A";
  let totalQuantity = 0;

  let modalContent = `
        <p><strong>Party Name:</strong> ${partyName}</p>
        <table class="table table-bordered table-hover modal-cart-summary">
            <thead>
                <tr>
                    <th>Item Name & Color</th>
                    <th>Sizes and Qty</th>
                    <th>Item Total</th>
                </tr>
            </thead>
            <tbody>
    `;

  if (!Array.isArray(cart) || cart.length === 0) {
    modalContent += '<tr><td colspan="3">No items in cart</td></tr>';
  } else {
    cart.forEach((item, index) => {
      if (!item || typeof item !== "object") return;

      Object.entries(item.colors || {}).forEach(([color, sizes]) => {
        if (typeof sizes === "object") {
          let itemTotal = 0;
          let sizesAndQty = [];

          Object.entries(sizes).forEach(([size, qty]) => {
            if (qty > 0) {
              sizesAndQty.push(`${size}/${qty}`);
              itemTotal += qty;
              totalQuantity += qty;
            }
          });

          if (itemTotal > 0) {
            modalContent += `
                            <tr class="clickable-row" data-index="${index}" data-color="${color}">
                                <td>${item.name} (${color})</td>
                                <td>${sizesAndQty.join(", ") || "N/A"}</td>
                                <td>${itemTotal}</td>
                            </tr>
                        `;
          }
        }
      });
    });
  }

  modalContent += `
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2"><strong>Total Quantity</strong></td>
                    <td><strong>${totalQuantity}</strong></td>
                </tr>
            </tfoot>
        </table>
    `;

  modalBody.innerHTML = modalContent;

  // Add click event listener to rows
  modalBody.querySelectorAll(".clickable-row").forEach((row) => {
    row.addEventListener("click", function () {
      const itemIndex = parseInt(this.dataset.index);
      const color = this.dataset.color;
      showEditItemModal(itemIndex, color, true);
    });
  });
}

function showOrderConfirmationModal(order, imgData) {
  console.log("Showing order confirmation modal");
  
  // Remove any existing modal
  const existingModal = document.getElementById("orderConfirmationModal");
  if (existingModal) {
    existingModal.remove();
  }

  // Create the modal
  const modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'orderConfirmationModal';
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('aria-labelledby', 'orderConfirmationModalLabel');
  modal.setAttribute('aria-hidden', 'true');

  // Add CSS styles for animations
  const style = document.createElement('style');
  style.textContent = `
    .confirmation-animation {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 20px auto;
    }
    .circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #23b26d;
      opacity: 0;
      animation: circleAnimation 0.5s forwards;
    }
    .checkmark {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30%;
      height: 60%;
      border-right: 12px solid white;
      border-bottom: 12px solid white;
      transform: translate(-50%, -60%) rotate(45deg) scale(0);
      animation: checkmarkAnimation 0.5s 0.5s forwards;
    }
    .pulse {
      position: absolute;
      top: -5%;
      left: -5%;
      width: 110%;
      height: 110%;
      border-radius: 50%;
      border: 5px solid #23b26d;
      opacity: 0;
      animation: pulseAnimation 2s 1s infinite;
    }
    @keyframes circleAnimation {
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes checkmarkAnimation {
      to { transform: translate(-50%, -60%) rotate(45deg) scale(1); }
    }
    @keyframes pulseAnimation {
      0% { transform: scale(1); opacity: 0.7; }
      100% { transform: scale(1.1); opacity: 0; }
    }
    .modified-order {
      color: #ff6600;
      font-weight: bold;
    }
    .order-confirmation-body {
      text-align: center;
      padding: 20px;
    }
    .order-details {
      margin-top: 20px;
      text-align: left;
      background: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
    }
    .order-detail-item {
      margin-bottom: 10px;
    }
    .order-number-display {
      font-size: 1.5em;
      font-weight: bold;
      color: #23b26d;
      margin: 15px 0;
    }
  `;
  document.head.appendChild(style);

  // Modal content
  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="orderConfirmationModalLabel">Order Confirmation</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body order-confirmation-body">
          <div class="confirmation-animation">
            <div class="circle"></div>
            <div class="checkmark"></div>
            <div class="pulse"></div>
          </div>
          <p>Thank you for your order!</p>
          <div class="order-number-display ${order.orderNumber.startsWith('Modified') ? 'modified-order' : ''}">
            ${order.orderNumber}
          </div>
          <div class="order-details">
            <div class="order-detail-item">
              <strong>Party Name:</strong> ${order.partyName}
            </div>
            <div class="order-detail-item">
              <strong>Date & Time:</strong> ${new Date(order.dateTime).toLocaleString()}
            </div>
            <div class="order-detail-item">
              <strong>Total Quantity:</strong> ${order.totalQuantity}
            </div>
            ${order.orderNote ? `
            <div class="order-detail-item">
              <strong>Notes:</strong> ${order.orderNote}
            </div>
            ` : ''}
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  try {
    // Initialize the modal
    const modalElement = document.getElementById("orderConfirmationModal");
    if (!modalElement) {
      throw new Error("Modal element not found in DOM");
    }
    
    const modalInstance = new bootstrap.Modal(modalElement);
    
    // Add event listener for modal hidden event
    modalElement.addEventListener('hidden.bs.modal', function () {
      // Clean up
      document.head.removeChild(style);
      document.body.removeChild(modalElement);
      window.location.reload();
    });

    // Show modal with slight delay
    setTimeout(() => {
      try {
        modalInstance.show();
        playAdvancedConfirmationSound();
        sendWebPushNotification(order.partyName);
        
        // Send Telegram notification if image data is provided
        if (imgData) {
          sendTelegramNotification(order.partyName, order.totalQuantity, order.orderNumber, imgData);
        }
        
        // Update pending orders list
        loadPendingOrders();
      } catch (showError) {
        console.error("Error showing modal:", showError);
        // Fallback to simple alert
       
      }
    }, 100);
    
  } catch (error) {
    console.error("Error initializing modal:", error);
    // Fallback to simple alert
   
    
    // Clean up if modal creation failed
    if (document.head.contains(style)) {
      document.head.removeChild(style);
    }
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
  }
}



// Helper function to create the modal structure
function createModal(partyName, dateTime, orderNumber) {
  const modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'orderConfirmationModal';
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('aria-labelledby', 'orderConfirmationModalLabel');
  modal.setAttribute('aria-hidden', 'true');

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="orderConfirmationModalLabel">Order Confirmation</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Thank you for your order!</p>
          <p>Party Name: ${partyName}</p>
          <p>Date & Time: ${new Date(dateTime).toLocaleString()}</p>
          <p>Order Number: <span class="order-number">${orderNumber}</span></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;

  return modal;
}

// ---------------Order Processing
// ---------------Order Processing
function handlePlaceOrder() {
  const placeOrderBtn = document.getElementById("placeOrderBtn");
  placeOrderBtn.disabled = true;
  placeOrderBtn.textContent = "Processing...";
  
  const partyName = document.getElementById("partySearch").value;
  const dateTime = new Date();
  const formattedDate = dateTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const orderNote = document.getElementById("orderNote").value.trim();

  try {
    // Create a new PDF document
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Set document metadata
    doc.setProperties({
      title: `Order for ${partyName}`,
      subject: 'Order Summary',
      author: 'KA OMS',
      keywords: 'order, summary',
      creator: 'KA OMS System'
    });

    // Add header
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text(`Order Summary - ${partyName}`, 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text(`Date: ${formattedDate}         -`, 105, 30, { align: 'right' });
    doc.text(`-       Created by: ${username}`, 105, 30, { align: 'left' }); 

    // Add a line separator
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 35, 190, 35);

    // Prepare data for the table
    const tableData = [];
    let totalQuantity = 0;

    cart.forEach(item => {
      Object.entries(item.colors).forEach(([color, sizes]) => {
        let colorTotal = 0;
        const sizeDetails = [];
        
        Object.entries(sizes).forEach(([size, qty]) => {
          if (qty > 0) {
            sizeDetails.push(`${size}: ${qty}`);
            colorTotal += qty;
            totalQuantity += qty;
          }
        });

        if (colorTotal > 0) {
          tableData.push({
            item: item.name,
            color: color,
            sizes: sizeDetails.join(', '),
            total: colorTotal
          });
        }
      });
    });

    // Add the table
    doc.autoTable({
      startY: 40,
      head: [['Item', 'Color', 'Size/Qty', 'Total']],
      body: tableData.map(row => [row.item, row.color, row.sizes, row.total]),
      theme: 'grid',
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 40 },
        2: { cellWidth: 'auto' },
        3: { cellWidth: 20 }
      },
      margin: { top: 40 },
      didDrawPage: function(data) {
        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text(`Page ${data.pageCount}`, 105, 285, { align: 'center' });
      }
    });

    // Add totals
    const finalY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.text(`Total Quantity: ${totalQuantity}`, 20, finalY);

    // Add order notes if present
    if (orderNote) {
      const notesY = finalY + 10;
      doc.setFontSize(12);
      doc.text('Order Notes:', 20, notesY);
      
      // Split notes into multiple lines if needed
      const splitNotes = doc.splitTextToSize(orderNote, 170);
      doc.setFontSize(10);
      doc.text(splitNotes, 20, notesY + 7);
    }

    // Save the PDF
    const fileName = `${partyName.replace(/[^a-z0-9]/gi, '_')}_${formattedDate.replace(/[^a-z0-9]/gi, '_')}.pdf`;
    doc.save(fileName);

    // Continue with order processing...
    getNextOrderNumber()
      .then((orderNumber) => {
        const newOrder = {
          orderNumber: orderNumber,
          partyName: partyName,
          dateTime: dateTime.toISOString(),
          items: cart,
          status: "Pending",
          totalQuantity: totalQuantity,
          orderNote: orderNote,
          createdBy: username
        };
        return saveOrderToFirebase(newOrder).then(() => newOrder);
      })
      .then((order) => {
        console.log("Order saved successfully:", order);
        
        // Close the order summary modal
        const orderSummaryModal = bootstrap.Modal.getInstance(document.getElementById("orderSummaryModal"));
        if (orderSummaryModal) {
          orderSummaryModal.hide();
        }

        // Show the order confirmation modal
        try {
          showOrderConfirmationModal(order);
        } catch (error) {
          console.error("Error showing confirmation modal:", error);
          alert("Your order has been placed successfully, but there was an error showing the confirmation. Order number: " + order.orderNumber);
        }

        // Reset the cart and update UI
        try {
          resetCart();
          updateCartButtonText(0);
          console.log("Cart reset and UI updated");
        } catch (resetError) {
          console.error("Error resetting cart:", resetError);
        }

        // Update pending orders list
        loadPendingOrders();
      })
      .catch((error) => {
        console.error("Error in order placement process:", error);
        alert("An error occurred during the order process. Please try again.");
      })
      .finally(() => {
        placeOrderBtn.disabled = false;
        placeOrderBtn.textContent = "Place Order";
      });
  } catch (error) {
    console.error("Error creating PDF:", error);
    alert("An error occurred while creating the PDF. Please try again.");
    placeOrderBtn.disabled = false;
    placeOrderBtn.textContent = "Place Order";
  }
}



function saveOrderToFirebase(order) {
  console.log('Saving order to Firebase:', order);
  
  if (order.key) {
    // Update existing order
    return firebase.database().ref(`orders/${order.key}`).set(order)
      .then(() => {
        console.log('Order updated successfully');
        return order;
      })
      .catch((error) => {
        console.error('Error updating order:', error);
        throw error;
      });
  } else {
    // Create new order
    return firebase.database().ref("orders").push(order)
      .then((ref) => {
        console.log('New order created successfully');
        order.key = ref.key;
        return order;
      })
      .catch((error) => {
        console.error('Error creating new order:', error);
        throw error;
      });
  }
}

function getNextOrderNumber(maxRetries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    function attempt(retriesLeft) {
      firebase
        .database()
        .ref("orderCounter")
        .transaction((current) => {
          return (current || 0) + 1;
        })
        .then((result) => {
          if (result.committed) {
            resolve(`K${result.snapshot.val()}`);
          } else {
            throw new Error("Failed to commit transaction");
          }
        })
        .catch((error) => {
          console.error(
            `Error getting next order number (${
              maxRetries - retriesLeft + 1
            }/${maxRetries}):`,
            error
          );
          if (retriesLeft > 0) {
            setTimeout(() => attempt(retriesLeft - 1), delay);
          } else {
            reject(
              new Error("Max retries reached. Unable to get next order number.")
            );
          }
        });
    }
    attempt(maxRetries);
  });
}


//----------------Miscellaneous
function createCategoryRadios(categories) {
  return `
        <div class="category-container">
            ${categories
              .map(
                (cat, index) => `
                <label>
                    <input type="radio" name="category" value="${cat}" ${
                  index === 0 ? "checked" : ""
                }>
                    ${cat}
                </label>
            `
              )
              .join("")}
        </div>
    `;
}

  //-------------------------------non important--------------------------------
 
  
  function loadNewItemsFromFirebase() {
    return firebase
      .database()
      .ref("items")
      .once("value")
      .then((snapshot) => {
        const firebaseItems = snapshot.val();
        if (firebaseItems) {
          // Convert Firebase object to array
          const firebaseItemsArray = Object.entries(firebaseItems).map(
            ([key, value]) => ({
              name: key.replace("_", "."),
              ...value,
            })
          );
  
          // Merge existing items with new items from Firebase
          items = items.filter(
            (item) =>
              !firebaseItemsArray.some((fbItem) => fbItem.name === item.name)
          );
          items = [...items, ...firebaseItemsArray];
  
          // Sort items by name
          items.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          );
  
          // Update the item search datalist
          updateItemSearchDatalist();
  
          console.log("Items loaded from Firebase:", items);
        }
      })
      .catch((error) => {
        console.error("Error loading items from Firebase:", error);
      });
  }


// Variables for modal control
let colorDetailsTimeout;
const colorDetailsModal = document.getElementById('colorDetailsModal');
const colorDetailsOverlay = document.getElementById('colorDetailsOverlay');
const colorPaletteIcon = document.getElementById('colorPaletteIcon');
const colorDetailsClose = document.getElementById('colorDetailsClose');

// Function to show modal
function showColorDetailsModal(item) {
    if (!item || !item.colorname) return;
    
    const colorDetailsList = document.getElementById('colorDetailsList');
    colorDetailsList.innerHTML = '';
    
    // Populate color details
    item.colorname.forEach(colorInfo => {
        const li = document.createElement('li');
        li.className = 'dbbrand-color-details-item';
        li.textContent = colorInfo;
        colorDetailsList.appendChild(li);
    });
    
    // Show modal and overlay
    colorDetailsModal.style.display = 'block';
    colorDetailsOverlay.style.display = 'block';
    
    // Set auto-close timeout
    clearTimeout(colorDetailsTimeout);
    colorDetailsTimeout = setTimeout(closeColorDetailsModal, 4500);
}

// Function to close modal
function closeColorDetailsModal() {
    colorDetailsModal.style.display = 'none';
    colorDetailsOverlay.style.display = 'none';
    clearTimeout(colorDetailsTimeout);
}

// Function to update color palette icon visibility
function updateColorPaletteIcon() {
    const itemDetailsContainer = document.getElementById('itemDetailsContainer');
    if (itemDetailsContainer) {
        const itemName = itemDetailsContainer.querySelector('h3')?.textContent;
        const currentItem = items.find(i => i.name === itemName);
        colorPaletteIcon.style.display = currentItem?.colorname ? 'inline' : 'none';
    } else {
        colorPaletteIcon.style.display = 'none';
    }
}

// Event listeners
colorPaletteIcon.addEventListener('click', () => {
    const itemName = document.querySelector('#itemDetailsContainer h3')?.textContent;
    const currentItem = items.find(i => i.name === itemName);
    showColorDetailsModal(currentItem);
});

colorDetailsClose.addEventListener('click', closeColorDetailsModal);
colorDetailsOverlay.addEventListener('click', closeColorDetailsModal);

// Observe DOM changes to update color palette icon visibility
const colorDetailsObserver = new MutationObserver(updateColorPaletteIcon);
colorDetailsObserver.observe(document.body, {
    childList: true,
    subtree: true
});

// Initial check for icon visibility
updateColorPaletteIcon();


function showItems(filter = '') {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    const filteredItems = items.filter(item =>
        item && item.name && item.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredItems.forEach(item => {
        const element = document.createElement('a');
        element.classList.add('list-group-item', 'list-group-item-action');
        element.textContent = item.name;
        element.href = '#';
        element.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('itemSearch').value = item.name;
            showItemDetails(item);
            itemList.style.display = 'none';
        });
        itemList.appendChild(element);
    });

    if (filteredItems.length === 0 && filter !== '') {
        const addNewItemElement = document.createElement('a');
        addNewItemElement.classList.add('list-group-item', 'list-group-item-action');
        addNewItemElement.textContent = `Add "${filter}" as a new item`;
        addNewItemElement.href = '#';
        addNewItemElement.addEventListener('click', function (e) {
            e.preventDefault();
            addNewItem(filter);
            itemList.style.display = 'none';
        });
        itemList.appendChild(addNewItemElement);
    }

    itemList.style.display = 'block';
}

     
