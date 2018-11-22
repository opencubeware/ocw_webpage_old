defmodule OcwWebpage.Model.Person do
  defstruct [:first_name, :last_name, :wca_id, :country]

  def new(%{first_name: first_name, last_name: last_name, wca_id: wca_id, country: country}) do
    struct(__MODULE__, %{
      first_name: first_name,
      last_name: last_name,
      wca_id: wca_id,
      country: country
    })
  end

  def to_map(struct), do: Map.from_struct(struct)
end
