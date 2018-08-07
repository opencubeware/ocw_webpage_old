all: install
	mix ecto.create && cd assets && yarn

install:
	mix deps.get
