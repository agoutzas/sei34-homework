require 'pry'
#  binding.pry # like JS debbugergem


def show_menu
  puts "calculator"
  puts "-=" * 40 # budget horizontal dividing line
  puts "[a] - Addition"
  puts "[q] - quit"
  #add other choices


  print "enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase



until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "addition comingc soon"
  else
    puts "invalid selection, you idiot"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "thanks for using calculator!"
