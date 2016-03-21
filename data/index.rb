require 'json'

json = {}
{
  :a => 'agilent-technologies',
  :appl => 'apple',
  :bac => 'bank-of-america-corp',
  :sam => 'boston-beer-company',
  :cbs => 'cbs-corp',
  :fb => 'facebook',
  :nflx => 'netflix',
  :nke => 'nike',
  :nok => 'nokia'

}.each do |key, value|
  str = File.read("#{value}.json")
  file = JSON.parse(str)
  results = file['query']['results']['quote']
  json[key] = {
    :company => value,
    :stocks => results
  }
end


File.open('data.json', 'w') do |f|
  f.write(JSON.pretty_generate(json))
end








