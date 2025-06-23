// code your solution here
const record = [
  { year: "2015", team: "Denver Broncos", result: "W" },
  { year: "2014", team: "Seattle Seahawks", result: "L" },
  { year: "2013", team: "Denver Broncos", result: "L" },
];
function superbowlWin(record) {
  const win = record.find(entry => entry.result === "W");
  return win ? win.year : undefined;
}
