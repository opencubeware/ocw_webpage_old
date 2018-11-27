defmodule OcwWebpage.DataAccess.Schemas.Person do
  use Ecto.Schema

  alias OcwWebpage.DataAccess.Schemas.Result

  schema "persons" do
    field(:first_name, :string)
    field(:last_name, :string)
    field(:wca_id, :string)
    field(:country, :string)
    has_many(:results, Result, foreign_key: :competitor_id)
  end
end
