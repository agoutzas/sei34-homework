train_map = {

  "N line" => {
    :stations => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  },
  "L line" => {
    :stations ["8th", "6th", "Union Square", "3rd", "1st"],
  },
  "6 line" => {
    :stations ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  },
}


puts train_map.select{|x| x[:stations] == "start_station"}.map{|y| y[:salary].to_i}.reduce(:+)
