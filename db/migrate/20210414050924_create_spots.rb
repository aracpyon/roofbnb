class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.integer :host_id, null: false

      t.timestamps
    end

    add_index :spots, :host_id
  end
end
