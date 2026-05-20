import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create an Admin user
  const adminPasswordHash = await bcrypt.hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@rentup.com" },
    update: {},
    create: {
      email: "admin@rentup.com",
      passwordHash: adminPasswordHash,
      firstName: "Admin",
      lastName: "User",
      role: "ADMIN",
      status: "ACTIVE",
    },
  });

  console.log("Admin user created/verified");

  // Create an Agent user
  const agentPasswordHash = await bcrypt.hash("agent123", 12);
  const agent = await prisma.user.upsert({
    where: { email: "agent@rentup.com" },
    update: {},
    create: {
      email: "agent@rentup.com",
      passwordHash: agentPasswordHash,
      firstName: "Mwape",
      lastName: "Mumba",
      role: "AGENT",
      status: "ACTIVE",
    },
  });

  console.log("Agent user created/verified");

  // Sample Properties (matching the UI)
  const propertiesData = [
    {
      title: "Kabulonga Luxury Apartments",
      slug: "kabulonga-luxury-apartments",
      description: "Beautiful apartment in Kabulonga.",
      listingType: "FOR_RENT",
      propertyType: "Apartment",
      price: 15000,
      city: "Lusaka",
      addressLine: "210 Bishops Road, Kabulonga",
      country: "Zambia",
      bedrooms: 3,
      bathrooms: 2,
      featured: true,
    },
    {
      title: "Riverside Villas",
      slug: "riverside-villas",
      description: "Luxury condos near the Kafue River.",
      listingType: "FOR_SALE",
      propertyType: "Condos",
      price: 950000,
      city: "Kitwe",
      addressLine: "5698 Riverside Drive",
      country: "Zambia",
      bedrooms: 4,
      bathrooms: 3,
      featured: true,
    },
    {
      title: "Cairo Road Commercial",
      slug: "cairo-road-commercial",
      description: "Modern offices in the CBD.",
      listingType: "FOR_RENT",
      propertyType: "Offices",
      price: 25000,
      city: "Lusaka",
      addressLine: "5624 Cairo Road, CBD",
      country: "Zambia",
      bedrooms: 0,
      bathrooms: 1,
      featured: false,
    },
  ];

  for (const data of propertiesData) {
    await prisma.property.upsert({
      where: { slug: data.slug },
      update: {},
      create: {
        ...data,
        status: "PUBLISHED",
        createdBy: { connect: { id: admin.id } },
        assignedAgent: { connect: { id: agent.id } },
        publishedAt: new Date(),
      },
    });
  }

  console.log("Sample properties seeded");

  // Sample Cars
  const carData = [
    {
      make: "Toyota",
      model: "Land Cruiser",
      year: 2022,
      category: "SUV",
      transmission: "AUTOMATIC",
      fuelType: "DIESEL",
      seats: 7,
      pricePerDay: 2500,
      description: "Robust and comfortable for long trips.",
      featured: true,
      image: "/uploads/land_cruiser.png",
    },
    {
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2021,
      category: "LUXURY",
      transmission: "AUTOMATIC",
      fuelType: "PETROL",
      seats: 5,
      pricePerDay: 3500,
      description: "Elegant and stylish for city driving.",
      featured: true,
      image: "/uploads/mercedes.png",
    },
    {
      make: "Volkswagen",
      model: "Polo",
      year: 2020,
      category: "ECONOMY",
      transmission: "MANUAL",
      fuelType: "PETROL",
      seats: 5,
      pricePerDay: 800,
      description: "Economical and reliable for daily use.",
      featured: false,
      image: "/uploads/vw_polo.png", // This one doesn't exist yet but I'll add it later or use a default
    },
  ];

  for (const data of carData) {
    const { image, ...carDetails } = data;
    await prisma.car.create({
      data: {
        ...carDetails,
        status: "AVAILABLE",
        images: {
          create: [
            {
              fileUrl: image,
              altText: `${data.make} ${data.model}`,
            },
          ],
        },
      },
    });
  }

  console.log("Sample cars seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
