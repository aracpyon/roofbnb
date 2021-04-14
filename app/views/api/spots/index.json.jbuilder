
@spots.each do |spot|
  json.set! spot.id do
    photos = {
      "amazon" => [image_url('spots/amazon_1.jpeg'), image_url('spots/amazon_2.jpeg'), image_url('spots/amazon_3.jpeg'), image_url('spots/amazon_4.jpeg'), image_url('spots/google_2.jpeg'), image_url('spots/google_3.jpeg'), image_url('spots/google_4.jpeg')],
      "google" => [image_url('spots/google_1.jpeg'), image_url('spots/google_2.jpeg'), image_url('spots/google_3.jpeg'), image_url('spots/google_4.jpeg')],
      "eiffel" => [image_url('spots/eiffel_1.jpeg'), image_url('spots/eiffel_2.jpg'), image_url('spots/eiffel_3.png'), image_url('spots/eiffel_4.jpeg')],
      "met" => [image_url('spots/met_1.jpeg'), image_url('spots/met_2.jpeg'), image_url('spots/met_3.jpeg'), image_url('spots/met_4.jpeg')],
      "timesquare" => [image_url('spots/timesquare_1.jpeg'), image_url('spots/timesquare_2.jpeg'), image_url('spots/timesquare_3.jpeg'), image_url('spots/timesquare_4.jpeg')]
    }
    json.partial! 'spot', spot: spot
    json.photos photos["#{spot.name}"]
  end
end


