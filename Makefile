all: install
	mix ecto.create && cd assets && npm install

install:
	mix deps.get
