alias OcwWebpage.Constants.{RoundName, EventName}
alias OcwWebpage.DataAccess.Schemas.{Continent, Country, Round, Event, Person, Tournament, Result}
alias OcwWebpage.Repo

round_names = [
  ["First Round", 1],
  ["Second Round", 2],
  ["Third Round", 3],
  ["Final Round", 4],
  ["Combined First", 5],
  ["Combined Final", 6]
]

event_names = [
  ["3x3x3", 1],
  ["2x2x2", 2],
  ["4x4x4", 3],
  ["5x5x5", 4],
  ["6x6x6", 5],
  ["7x7x7", 6],
  ["3x3x3 Blindfolded", 7],
  ["3x3x3 Fewest Moves", 8],
  ["3x3x3 One-Handed", 9],
  ["3x3x3 With Feet", 10],
  ["Clock", 11],
  ["Megaminx", 12],
  ["Pyraminx", 13],
  ["Skewb", 14],
  ["Square-1", 15],
  ["4x4x4 Blindfolded", 16],
  ["5x5x5 Blindfolded", 17],
  ["3x3x3 Multi-Blind", 18]
]

continents = [
  ["Africa", 1],
  ["Asia", 2],
  ["Europe", 3],
  ["Multiple Continents", 4],
  ["North America", 5],
  ["Oceania", 6],
  ["South America", 7]
]

countries = [
  ["Afghanistan", "AF", 2, 1],
  ["Albania", "AL", 3, 2],
  ["Algeria", "DZ", 1, 3],
  ["Andorra", "AD", 3, 4],
  ["Angola", "AO", 1, 5],
  ["Antigua and Barbuda", "AG", 5, 6],
  ["Argentina", "AR", 7, 7],
  ["Armenia", "AM", 2, 8],
  ["Australia", "AU", 6, 9],
  ["Austria", "AT", 3, 10],
  ["Azerbaijan", "AZ", 3, 11],
  ["Bahamas", "BS", 5, 12],
  ["Bahrain", "BH", 2, 13],
  ["Bangladesh", "BD", 2, 14],
  ["Barbados", "BB", 5, 15],
  ["Belarus", "BY", 3, 16],
  ["Belgium", "BE", 3, 17],
  ["Belize", "BZ", 5, 18],
  ["Benin", "BJ", 1, 19],
  ["Bhutan", "BT", 2, 20],
  ["Bolivia", "BO", 7, 21],
  ["Bosnia and Herzegovina", "BA", 3, 22],
  ["Botswana", "BW", 1, 23],
  ["Brazil", "BR", 7, 24],
  ["Brunei", "BN", 2, 25],
  ["Bulgaria", "BG", 3, 26],
  ["Burkina Faso", "BF", 1, 27],
  ["Burundi", "BI", 1, 28],
  ["Cabo Verde", "CV", 1, 29],
  ["Cambodia", "KH", 2, 30],
  ["Cameroon", "CM", 1, 31],
  ["Canada", "CA", 5, 32],
  ["Central African Republic", "CF", 1, 33],
  ["Chad", "TD", 1, 34],
  ["Chile", "CL", 7, 35],
  ["China", "CN", 1, 36],
  ["Colombia", "CO", 7, 37],
  ["Comoros", "KM", 1, 38],
  ["Congo", "CG", 1, 39],
  ["Costa Rica", "CR", 5, 40],
  ["Côte d'Ivoire", "CI", 1, 41],
  ["Croatia", "HR", 3, 42],
  ["Cuba", "CU", 5, 43],
  ["Cyprus", "CY", 3, 44],
  ["Czech Republic", "CZ", 3, 45],
  ["Democratic People’s Republic of Korea", "KP", 2, 46],
  ["Democratic Republic of the Congo", "CD", 1, 47],
  ["Denmark", "DK", 3, 48],
  ["Djibouti", "DJ", 1, 49],
  ["Dominica", "DM", 5, 50],
  ["Dominican Republic", "DO", 5, 51],
  ["Ecuador", "EC", 7, 52],
  ["Egypt", "EG", 1, 53],
  ["El Salvador", "SV", 5, 54],
  ["Equatorial Guinea", "GQ", 1, 55],
  ["Eritrea", "ER", 1, 56],
  ["Estonia", "EE", 3, 57],
  ["Ethiopia", "ET", 1, 58],
  ["Federated States of Micronesia", "FM", 6, 59],
  ["Fiji", "FJ", 6, 60],
  ["Finland", "FI", 3, 61],
  ["France", "FR", 3, 62],
  ["Gabon", "GA", 1, 63],
  ["Gambia", "GM", 1, 64],
  ["Georgia", "GE", 3, 65],
  ["Germany", "DE", 3, 66],
  ["Ghana", "GH", 1, 67],
  ["Greece", "GR", 3, 68],
  ["Grenada", "GD", 5, 69],
  ["Guatemala", "GT", 5, 70],
  ["Guinea", "GN", 1, 71],
  ["Guinea Bissau", "GW", 1, 72],
  ["Guyana", "GY", 7, 73],
  ["Haiti", "HT", 5, 74],
  ["Holy See", "VA", 3, 75],
  ["Honduras", "HN", 5, 76],
  ["Hong Kong", "HK", 2, 77],
  ["Hungary", "HU", 3, 78],
  ["Iceland", "IS", 3, 79],
  ["India", "IN", 2, 80],
  ["Indonesia", "ID", 2, 81],
  ["Iran", "IR", 2, 82],
  ["Iraq", "IQ", 2, 83],
  ["Ireland", "IE", 3, 84],
  ["Israel", "IL", 3, 85],
  ["Italy", "IT", 3, 86],
  ["Jamaica", "JM", 5, 87],
  ["Japan", "JP", 2, 88],
  ["Jordan", "JO", 2, 89],
  ["Kazakhstan", "KZ", 2, 90],
  ["Kenya", "KE", 1, 91],
  ["Kiribati", "KI", 6, 92],
  ["Republic of Korea", "KR", 2, 93],
  ["Kosovo", "XK", 3, 94],
  ["Kuwait", "KW", 2, 95],
  ["Kyrgyzstan", "KG", 2, 96],
  ["Laos", "LA", 2, 97],
  ["Latvia", "LV", 3, 98],
  ["Lebanon", "LB", 2, 99],
  ["Lesotho", "LS", 1, 100],
  ["Liberia", "LR", 1, 101],
  ["Libya", "LY", 1, 102],
  ["Liechtenstein", "LI", 3, 103],
  ["Lithuania", "LT", 3, 104],
  ["Luxembourg", "LU", 3, 105],
  ["Macau", "MO", 2, 106],
  ["Macedonia", "MK", 3, 107],
  ["Madagascar", "MG", 1, 108],
  ["Malawi", "MW", 1, 109],
  ["Malaysia", "MY", 2, 110],
  ["Maldives", "MV", 2, 111],
  ["Mali", "ML", 1, 112],
  ["Malta", "MT", 3, 113],
  ["Marshall Islands", "MH", 6, 114],
  ["Mauritania", "MR", 1, 115],
  ["Mauritius", "MU", 1, 116],
  ["Mexico", "MX", 5, 117],
  ["Moldova", "MD", 3, 118],
  ["Monaco", "MC", 3, 119],
  ["Mongolia", "MN", 2, 120],
  ["Montenegro", "ME", 3, 121],
  ["Morocco", "MA", 1, 122],
  ["Mozambique", "MZ", 1, 123],
  ["Myanmar", "MM", 2, 124],
  ["Namibia", "NA", 1, 125],
  ["Nauru", "NR", 6, 126],
  ["Nepal", "NP", 2, 127],
  ["Netherlands", "NL", 3, 128],
  ["New Zealand", "NZ", 6, 129],
  ["Nicaragua", "NI", 5, 130],
  ["Niger", "NE", 1, 131],
  ["Nigeria", "NG", 1, 132],
  ["Norway", "NO", 3, 133],
  ["Oman", "OM", 2, 134],
  ["Pakistan", "PK", 2, 135],
  ["Palau", "PW", 6, 136],
  ["Palestine", "PS", 2, 137],
  ["Panama", "PA", 5, 138],
  ["Papua New Guinea", "PG", 6, 139],
  ["Paraguay", "PY", 7, 140],
  ["Peru", "PE", 7, 141],
  ["Philippines", "PH", 2, 142],
  ["Poland", "PL", 3, 143],
  ["Portugal", "PT", 3, 144],
  ["Qatar", "QA", 2, 145],
  ["Romania", "RO", 3, 146],
  ["Russia", "RU", 3, 147],
  ["Rwanda", "RW", 1, 148],
  ["Saint Kitts and Nevis", "KN", 5, 149],
  ["Saint Lucia", "LC", 5, 150],
  ["Saint Vincent and the Grenadines", "VC", 5, 151],
  ["Samoa", "WS", 6, 152],
  ["San Marino", "SM", 3, 153],
  ["São Tomé and Príncipe", "ST", 1, 154],
  ["Saudi Arabia", "SA", 2, 155],
  ["Senegal", "SN", 1, 156],
  ["Serbia", "RS", 3, 157],
  ["Seychelles", "SC", 1, 158],
  ["Sierra Leone", "SL", 1, 159],
  ["Singapore", "SG", 2, 160],
  ["Slovakia", "SK", 3, 161],
  ["Slovenia", "SI", 3, 162],
  ["Solomon Islands", "SB", 6, 163],
  ["Somalia", "SO", 1, 164],
  ["South Africa", "ZA", 1, 165],
  ["South Sudan", "SS", 1, 166],
  ["Spain", "ES", 3, 167],
  ["Sri Lanka", "LK", 2, 168],
  ["Sudan", "SD", 1, 169],
  ["Suriname", "SR", 7, 170],
  ["Swaziland", "SZ", 1, 171],
  ["Sweden", "SE", 3, 172],
  ["Switzerland", "CH", 3, 173],
  ["Syria", "SY", 2, 174],
  ["Taiwan", "TW", 2, 175],
  ["Tajikistan", "TJ", 2, 176],
  ["Tanzania", "TZ", 1, 177],
  ["Thailand", "TH", 2, 178],
  ["Timor-Leste", "TL", 2, 179],
  ["Togo", "TG", 1, 180],
  ["Tonga", "TO", 6, 181],
  ["Trinidad and Tobago", "TT", 5, 182],
  ["Tunisia", "TN", 1, 183],
  ["Turkey", "TR", 3, 184],
  ["Turkmenistan", "TM", 2, 185],
  ["Tuvalu", "TV", 6, 186],
  ["Uganda", "UG", 1, 187],
  ["Ukraine", "UA", 3, 188],
  ["United Arab Emirates", "AE", 2, 189],
  ["United Kingdom", "GB", 3, 190],
  ["Uruguay", "UY", 7, 191],
  ["United States", "US", 5, 192],
  ["Uzbekistan", "UZ", 2, 193],
  ["Vanuatu", "VU", 6, 194],
  ["Venezuela", "VE", 7, 195],
  ["Vietnam", "VN", 2, 196],
  ["Multiple Countries (Asia)", "XA", 2, 197],
  ["Multiple Countries (Europe)", "XE", 3, 198],
  ["Multiple Countries (Americas)", "XM", 4, 199],
  ["Multiple Countries (South America)", "XS", 7, 200],
  ["Yemen", "YE", 2, 201],
  ["Zambia", "ZM", 1, 202],
  ["Zimbabwe", "ZW", 1, 203]
]

Enum.each(round_names, fn [name, id] -> Repo.insert(%RoundName{name: name, id: id}) end)
Enum.each(event_names, fn [name, id] -> Repo.insert(%EventName{name: name, id: id}) end)
Enum.each(continents, fn [name, id] -> Repo.insert(%Continent{name: name, id: id}) end)

Enum.each(countries, fn [name, iso2, continent_id, id] ->
  Repo.insert(%Country{name: name, iso2: iso2, continent_id: continent_id, id: id})
end)

event_name1 = Repo.get(EventName, 1)
event_name2 = Repo.get(EventName, 2)
event_name3 = Repo.get(EventName, 3)
event_name4 = Repo.get(EventName, 4)
event_name5 = Repo.get(EventName, 5)
event_name6 = Repo.get(EventName, 6)

round_name1 = Repo.get(RoundName, 1)
round_name2 = Repo.get(RoundName, 2)
round_name3 = Repo.get(RoundName, 3)
round_name4 = Repo.get(RoundName, 4)
round_name5 = Repo.get(RoundName, 5)
round_name6 = Repo.get(RoundName, 6)

round_names = [round_name1, round_name2, round_name3, round_name4, round_name5]

person1 =
  Repo.insert!(%Person{
    first_name: "John",
    last_name: "Doe",
    wca_id: "2018dupa",
    country_id: 190
  })

person2 =
  Repo.insert!(%Person{
    first_name: "Rafał",
    last_name: "Studnicki",
    wca_id: "1984down",
    country_id: 143
  })

person3 =
  Repo.insert!(%Person{
    first_name: "Kamil",
    last_name: "Zieliński",
    wca_id: "2009lol",
    country_id: 62
  })

country = Repo.get(Country, 141)

tournament = Repo.insert!(%Tournament{name: "Cracow Open 2013", country: country})

event1 = Repo.insert!(%Event{event_name: event_name1, tournament: tournament})
event2 = Repo.insert!(%Event{event_name: event_name2, tournament: tournament})

round1 = Repo.insert!(%Round{round_name: round_name1, event: event1})
round2 = Repo.insert!(%Round{round_name: round_name2, event: event1})
round3 = Repo.insert!(%Round{round_name: round_name1, event: event2})
round4 = Repo.insert!(%Round{round_name: round_name2, event: event2})

Repo.insert(%Result{
  round: round1,
  attempts: [5100, 6200, 7300, 5800, 7400],
  average: 636,
  competitor_id: person1.id
})

Repo.insert(%Result{
  round: round1,
  attempts: [810, 620, 730, 580, 740],
  average: 696,
  competitor_id: person2.id
})

Repo.insert(%Result{
  round: round1,
  attempts: [710, 620, 580, 720, 480],
  average: 622,
  competitor_id: person3.id
})

Repo.insert(%Result{
  round: round3,
  attempts: [310, 620, 730, 530, 740],
  average: 622,
  competitor_id: person1.id
})

Repo.insert(%Result{
  round: round3,
  attempts: [710, 620, 580, 720, 480],
  average: 586,
  competitor_id: person2.id
})

Repo.insert(%Result{
  round: round3,
  attempts: [310, 620, 730, 530, 740],
  average: 586,
  competitor_id: person3.id
})

Repo.insert(%Result{
  round: round2,
  attempts: [810, 620, 730, 580, 740],
  average: 696,
  competitor_id: person1.id
})

Repo.insert(%Result{
  round: round2,
  attempts: [310, 620, 730, 530, 740],
  average: 696,
  competitor_id: person2.id
})

Repo.insert(%Result{
  round: round2,
  attempts: [810, 620, 730, 580, 740],
  average: 696,
  competitor_id: person3.id
})

Repo.insert(%Result{
  round: round4,
  attempts: [310, 620, 730, 530, 740],
  average: 586,
  competitor_id: person1.id
})

Repo.insert(%Result{
  round: round4,
  attempts: [810, 620, 730, 580, 740],
  average: 586,
  competitor_id: person2.id
})

Repo.insert(%Result{
  round: round4,
  attempts: [310, 620, 730, 530, 740],
  average: 586,
  competitor_id: person3.id
})
