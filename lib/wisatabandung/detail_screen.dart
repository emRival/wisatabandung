import 'package:aplikasi_pertamaku/model/tourism_place.dart';
import 'package:flutter/material.dart';

class DetailScreen extends StatelessWidget {
  final TourismPlace place;
  const DetailScreen({required this.place, super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: LayoutBuilder(builder: (context, BoxConstraints constraints) {
          if (constraints.maxWidth <= 700) {
            return DetailMobileScreen(place: place);
          } else {
            return DetailWebScreen(place: place);
          }
        }),
      ),
    );
  }
}

class DetailMobileScreen extends StatelessWidget {
  const DetailMobileScreen({
    super.key,
    required this.place,
  });

  final TourismPlace place;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Stack(
          children: [
            Image.asset(place.imageAsset),
            Positioned(
              left: 19,
              top: 25,
              child: InkWell(
                onTap: () {
                  Navigator.pop(context);
                },
                child: Container(
                  height: 40,
                  width: 40,
                  padding: const EdgeInsets.all(2),
                  decoration: const BoxDecoration(
                      color: Colors.white, shape: BoxShape.circle),
                  child: const Icon(Icons.arrow_back),
                ),
              ),
            ),
          ],
        ),
        Container(
          alignment: Alignment.center,
          padding: const EdgeInsets.symmetric(vertical: 20),
          child: Text(
            place.name,
            style: const TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
          ),
        ),
        Container(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Column(
                children: [
                  const Icon(Icons.date_range),
                  Text(place.openDays),
                ],
              ),
              Column(
                children: [
                  const Icon(Icons.access_time),
                  Text(place.openTime),
                ],
              ),
              Column(
                children: [
                  const Icon(Icons.monetization_on_outlined),
                  Text(place.ticketPrice),
                ],
              )
            ],
          ),
        ),
        Container(
          padding: const EdgeInsets.all(20),
          child: Text(
            place.description,
            textAlign: TextAlign.center,
          ),
        ),
        SizedBox(
          height: 250,
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: place.imageUrls.length,
            itemBuilder: (context, index) {
              final String image = place.imageUrls[index];
              return Padding(
                padding: const EdgeInsets.all(20.0),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(15),
                  child: Image.network(image),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}

class DetailWebScreen extends StatefulWidget {
  final TourismPlace place;

  const DetailWebScreen({required this.place, super.key});

  @override
  State<DetailWebScreen> createState() => _DetailWebScreenState();
}

class _DetailWebScreenState extends State<DetailWebScreen> {
  final _scrollbarController = ScrollController();

  @override
  void dispose() {
    _scrollbarController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 64, vertical: 16),
      child: Center(
        child: SizedBox(
          width: 1200,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                "Wisata bandung",
                style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
              ),
              const SizedBox(
                height: 20,
              ),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: Column(
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadius.circular(10),
                          child: Image.asset(widget.place.imageAsset),
                        ),
                        const SizedBox(
                          height: 16,
                        ),
                        Scrollbar(
                          controller: _scrollbarController,
                          child: SizedBox(
                            height: 150,
                            child: ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: widget.place.imageUrls.length,
                              itemBuilder: (context, index) {
                                final String image =
                                    widget.place.imageUrls[index];
                                return Padding(
                                  padding: const EdgeInsets.only(right: 20),
                                  child: ClipRRect(
                                    borderRadius: BorderRadius.circular(15),
                                    child: Image.network(image),
                                  ),
                                );
                              },
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(
                    width: 16,
                  ),
                  Expanded(
                    child: Card(
                      child: Container(
                        padding: const EdgeInsets.all(16),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              widget.place.name,
                              textAlign: TextAlign.center,
                              style: const TextStyle(
                                fontSize: 30,
                              ),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Row(
                                  children: [
                                    const Icon(Icons.calendar_today),
                                    const SizedBox(
                                      width: 8,
                                    ),
                                    Text(widget.place.openDays),
                                  ],
                                ),
                                const Icon(
                                  Icons.favorite_border_outlined,
                                  color: Colors.red,
                                ),
                              ],
                            ),
                            const SizedBox(
                              height: 8,
                            ),
                            Row(
                              children: [
                                const Icon(Icons.access_time),
                                const SizedBox(
                                  width: 8,
                                ),
                                Text(widget.place.openTime),
                              ],
                            ),
                            const SizedBox(
                              height: 8,
                            ),
                            Row(
                              children: [
                                const Icon(Icons.monetization_on),
                                const SizedBox(
                                  width: 8,
                                ),
                                Text(widget.place.ticketPrice),
                              ],
                            ),
                            Container(
                              padding: const EdgeInsets.all(16),
                              child: Text(
                                widget.place.description,
                                textAlign: TextAlign.justify,
                                style: const TextStyle(
                                  fontSize: 16,
                                ),
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
