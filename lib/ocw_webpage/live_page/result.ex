defmodule OcwWebpage.LivePage.Result do
  use Ecto.Schema

  alias OcwWebpage.{LivePage.Round, Person}

  schema "results" do
    field(:attempts, {:array, :string})
    belongs_to(:round, Round)
    belongs_to(:person, Person, foreign_key: :competitor_id)
  end
end
