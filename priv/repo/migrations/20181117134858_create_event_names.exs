defmodule OcwWebpage.Repo.Migrations.CreateRounds do
  use Ecto.Migration

  def change do
    create table(:event_names) do
      add(:name, :string, null: false)
      add(:name_id, :integer, null: false)
    end
  end
end
