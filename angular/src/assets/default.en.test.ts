export const DefaultENTest = {
  buttons: {
    cancel: 'Cancel',
    apply: 'Apply',
    close: 'Close',
    send: 'Send',
    login: 'Login',
    register: 'Register',
    bookTable: 'Book Table',
    inviteFriends: 'Invite friends',
    viewMenu: 'View Menu',
    addToOrder: 'Add to order',
    clearFilters: 'Clear Filters',
    applyFilters: 'Apply Filters',
    removeComment: 'Remove Comment',
    addComment: 'Add comment',

  },
  table: {
    rowsPage: 'Rows per page',
    of: 'of',
    noResults: 'No results to display',
  },
  alerts: {
    accessError: 'Access denied, please log in first',
    genericError: 'An error has ocurred, please try again later',
    urlError: 'Url not found, please try again',
    'email confirmations': {
      invitationAccept: 'Invitation succesfully accepted',
      invitationReject: 'Invitation succesfully rejected',
      bookingCancel: 'Booking succesfully canceled',
      orderCancel: 'Order succesfully canceled',
    },
    orderID:
      'To order a menu it is necessary to obtain a booking id. Either you enter your already known booking id or you book a table',
    passwordError: 'Password Mismatch',
    authAlerts: {
      loginSuccess: 'Login successful',
      registerSuccess: 'Register successful',
      registerFail: 'Register failed, username already in use',
      logoutSuccess: 'Log out successful, come back soon!',
    },
  },
  formFields: {
    username: 'Username',
    password: 'Password',
    token: 'One Time Password',
    confirmPassword: 'Confirm Password',
    date: 'Date',
    name: 'Name',
    email: 'Email',
    assistants: 'Table guests',
    friends: 'Friends',
    terms: 'Accept terms',
    dateTime: 'Date and time',
    guests: 'Guests',
    guestsPH: 'Enter invitation email',
    comment: 'Comment',
    total: 'Total',
    referenceNumber: 'Reference number',
  },
  bookTable: {
    title: 'You can invite your friends to lunch or book a table',
    bookingTab: 'Book a table',
    reservationTab: 'Invite friends',
    bookingTitle: 'Book your table',
    bookingSubtitle: 'You can book a table and an order menu',
    reservationTitle: 'Add your information and friends',
    dialog: {
      title: 'Book Table',
      bookingSuccess: 'Table succesfully booked',
      bookingError: 'Error booking, please try again later',
    },
    formErrors: {
      nameRequired: 'Required. Please insert a name to reserve the table',
      emailRequired: 'Required. Please insert an email to reserve the table',
      emailPattern:
        'Insert a valid email address to send reservation data. e.g. email@email.com.',
      emailFormat: 'Email format not valid',
      assistantsRequired: 'Required. Please insert the number of assistants.',
      assistantsMax:
        'You cannot reserve more assistants than the size of the biggest table (8), if you need more tables, make more bookings.',
      assistantsMin:
        'You cannot reserve an empty or negative number of assistants',
    },
  },
  main: {
    home: 'Home',
    menu: 'Menu',
    book: 'Book table',
    orders: 'Orders',
    reservations: 'Reservations',
    userActions: {
      user: 'User',
      pairing: 'Set two-factor authentication',
      logout: 'Log out',
      changePassword: 'Change password',
      twitterAccount: 'Twitter account',
      signOut: 'Sign out',
      orders: 'Orders',
    },
  },
  home: {
    subtitle: 'More than just delicious food',
    restaurantTitle: 'Our restaurant',
    restaurantContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum tellus eget volutpat porta.
            Duis pellentesque velit venenatis, tincidunt ligula ac, rhoncus felis.
            Donec aliquam nulla id turpis dignissim laoreet. Vestibulum sit amet ante eu lacus convallis lobortis sit amet eu orci.
            Nam vitae felis ac nisi accumsan faucibus.`,
    menuTitle: 'Our menu',
    menuContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent elementum tellus eget volutpat porta. Duis pellentesque velit venenatis, tincidunt ligula ac, rhoncus felis.
            Donec aliquam nulla id turpis dignissim laoreet. Vestibulum sit amet ante eu lacus convallis lobortis sit amet eu orci.
            Nam vitae felis ac nisi accumsan faucibus.`,
  },
  menu: {
    filterTitle: 'FILTERS',
    filter: {
      search: 'Search our dishes',
      sort: 'Sort By',
      price: 'Price',
      likes: 'Likes',
      name: 'Name',
      mainDishes: 'Main dishes',
      starters: 'Starters',
      desserts: 'Desserts',
      noodle: 'Noodle',
      rice: 'Rice',
      curry: 'Curry',
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      favourites: 'Favourites',
    },
  },
  sidenav: {
    title: 'Resume Booking',
    header: 'Order menu',
    bookingId: 'Booking ID',
    noSelection: 'You have not selected any order',
    dialog: {
      title: 'Add a comment',
      content:
        'Here you can add a short comment to our cookers about how to prepare your dish',
    },
  },
  userArea: {
    loginTitle: 'LOGIN',
    signupTitle: 'SIGN UP',
    emailError: 'Please, enter a valid email address',
    passwordDialog: {
      title: 'Set new Password',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      verifyPassword: 'Verify Password',
    },
    twitterDialog: {
      title: 'Associate twitter account',
      twitterUsernamePH: 'Twitter username',
      twitterPasswordPH: 'Twitter password',
      loginbutton: 'Log in Twitter',
    },
    qrcodeDialog: {
      twofactorNotFound: 'Two Factor Authentication has not been activated yet',
      twofactorTitle: 'Set up Two Factor Authentication',
      twofactorStatus: 'Two Factor Authentication Status',
      twofactorDescription:
        'Please scan the QR code with the Google Authenticator or use the secret key',
      twofactorclose: 'Close',
      qrSwitchText: 'QR Code',
      secretSwitchText: 'Secret Key',
    },
  },
  cockpit: {
    filter: 'Filter',
    orders: {
      title: 'Orders',
      dialogTitle: 'ORDER DETAILS - REFERENCE NUMBER',
      dialogTable: {
        dishH: 'Dish',
        commentsH: 'Comments',
        extrasH: 'Extra',
        quantityH: 'Quantity',
        priceH: 'Price',
      },
    },
    reservations: {
      title: 'Reservations',
      dialogTitle: 'RESERVATION DETAILS - REFERENCE NUMBER',
      dialogTable: {
        guestEmailH: 'Guest email',
        acceptanceH: 'Acceptances and declines',
        assistantsH: 'Assistants',
      },
    },
    table: {
      reservationDateH: 'Reservation Date',
      emailH: 'Email',
      bookingTokenH: 'Reference Number',
      ownerH: 'Owner',
      tableH: 'Table',
      creationDateH: 'Creation date',
    },
  },

  adminCockpit: {
    table: {
      nameH: 'Name',
      emailH: 'Email',
      roleH: 'Role'
    },
  },
};
