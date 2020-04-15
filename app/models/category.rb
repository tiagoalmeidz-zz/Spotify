class Category < ApplicationRecord
  has_many :albums

  validades :name, precense: true

  has_one_attached :image
end
