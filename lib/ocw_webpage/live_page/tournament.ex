defmodule OcwWebpage.LivePage.Tournament do
  use Ecto.Schema

  schema "tournaments" do
    field(:name, :string)
  end
end
